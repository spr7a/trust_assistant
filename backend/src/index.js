import  express  from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./backend/.env",
})

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://trustmecro.netlify.app'
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  })
);

app.use(
  express.json({
    limit: "128kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "128kb",
  })
);

app.use(express.static("public"));
app.use(cookieParser());

//Import routes
import userRouter from "./routes/user.routes.js"
import moderatorRouter from "./routes/moderator.routes.js"
//Routes declaration
app.use("/api/users",userRouter)
app.use("/api/moderators",moderatorRouter)


// Get port from environment and store in Express.
const port = parseInt(process.env.PORT, 10) || 8000;

connectDB()
.then(()=>{
    const server = app.listen(port, '0.0.0.0', () => {
        console.log(`Server is running at port: ${port}`);
        console.log(`Server URL: http://localhost:${port}`);
    });
    
    // Handle server errors
    server.on('error', error => {
        if (error.syscall !== 'listen') {
            throw error;
        }
        
        switch (error.code) {
            case 'EACCES':
                console.error(`Port ${port} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`Port ${port} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    });
})
.catch((error)=>{
    console.log("MongoDB connection failed! ",error);
})