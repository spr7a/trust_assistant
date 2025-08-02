# 🛡️ Trust Assistant

<div align="center">

**AI-Powered Trust & Verification Platform**

[![Made with React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Powered by Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![AI Integration](https://img.shields.io/badge/AI-Google%20AI-FF6B6B?style=for-the-badge)](https://ai.google/)

<!-- [![License: ISC](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE) -->

</div>

---

## 🛠️ Technology Stack

<table>
<tr>
<td align="center" width="50%">

### 🎨 Frontend
- **React.js 19** - Modern UI framework
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component library
- **React Query** - Server state management
- **Axios** - HTTP client library

</td>
<td align="center" width="50%">

### ⚙️ Backend
- **Node.js & Express** - Server runtime & framework
- **MongoDB & Mongoose** - Database & ODM
- **JWT** - Authentication tokens
- **Google AI** - Generative AI integration

</td>
</tr>
</table>

## 🏁 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or later) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **MongoDB** - [Local installation](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **API Keys** - Google AI credentials

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/pnnv/trust_assist.git
cd trust_assist

# Install backend dependencies
cd backend
cp .env.example .env
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 🔧 Configuration

Create a `.env` file in the `backend` directory:

```env
# Database
MONGODB_URI=mongodb://localhost:696969/trust_assist

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here

# AI Services
GOOGLE_AI_KEY=your-google-ai-api-key

# Server Configuration
PORT=3000
NODE_ENV=development
```

### 🎯 Running the Application

**Backend Server:**
```bash
cd backend
npm run dev
```

**Frontend Application:**
```bash
cd frontend
npm run dev
```

🌐 **Access the application:** [http://localhost:5173](http://localhost:5173)

## 📁 Project Architecture

```
trust_assist/
├── 📁 backend/                 # Server-side application
│   ├── 📁 src/
│   │   ├── 📁 controllers/     # Route controllers
│   │   ├── 📁 models/          # Database models
│   │   ├── 📁 routes/          # API routes
│   │   ├── 📁 middleware/      # Custom middleware
│   │   └── 📄 server.js        # Entry point
│   ├── 📄 .env.example         # Environment template
│   └── 📄 package.json         # Dependencies
├── 📁 frontend/                # Client-side application
│   ├── 📁 public/              # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/      # React components
│   │   ├── 📁 pages/           # Page components
│   │   ├── 📁 hooks/           # Custom hooks
│   │   ├── 📁 utils/           # Utility functions
│   │   └── 📄 main.jsx         # App entry point
│   └── 📄 package.json         # Dependencies
├── 📄 README.md                # Project documentation
└── 📄 LICENSE                  # License file
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| `POST` | `/api/auth/login` | User authentication |
| `POST` | `/api/auth/register` | User registration |
| `GET` | `/api/user/profile` | Get user profile |
| `POST` | `/api/ai/generate` | AI content generation |
| `POST` | `/api/trust/verify` | Trust verification |

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

<!-- ## 📋 Development Scripts

### Backend
```bash
npm run dev      # Start development server
npm start        # Start production server
npm test         # Run tests
npm run lint     # Check code style
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm test         # Run tests
``` -->

<!-- ## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details. -->
<!-- 
## 🙏 Acknowledgments

Special thanks to the amazing open-source community and these fantastic tools:

- [Google AI](https://ai.google/) - For powerful generative AI capabilities
- [React](https://reactjs.org/) - For the incredible UI framework
- [Vite](https://vitejs.dev/) - For blazing fast build tools
- [Tailwind CSS](https://tailwindcss.com/) - For beautiful, utility-first styling
- [MongoDB](https://www.mongodb.com/) - For flexible, scalable database solutions -->

---

<div align="center">
<!-- 
**Built with ❤️ by the Trust Assistant Team** -->

[⭐ Star this repo](https://github.com/pnnv/trust_assist) • [🐛 Report Bug](https://github.com/pnnv/trust_assist/issues) • [💡 Request Feature](https://github.com/pnnv/trust_assist/issues)

</div>
