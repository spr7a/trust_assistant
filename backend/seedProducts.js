// backend/seedProducts.js
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

const API_BASE_URL = 'http://localhost:8000/api';

// Sample product data
const sampleProducts = [
	{
		"name": "Wireless Bluetooth Earbuds with Charging Case, White",
		"description": "WIRELESS CONNECTIVITY: Bluetooth-enabled earbuds with instant pairing capability for seamless audio streaming from compatible devices | CHARGING CASE: Compact white charging case provides secure storage and multiple recharges for extended listening time | TOUCH CONTROLS: Intuitive touch-sensitive controls on earbuds allow easy management of music playback and calls | ERGONOMIC DESIGN: Lightweight construction and contoured shape ensure comfortable fit for extended wearing periods | DUAL MICROPHONES: Built-in microphones in each earbud enable clear voice capture for hands-free calling | Free finger sleeve for gaming",
		"price": 149.50,
		"category": "Electronics > Headphones, Earbuds & Accessories > Headphones > In-Ear",
		"images": [
			{
				"url": "https://m.media-amazon.com/images/I/21+p8UbHzVL.jpg",
				"alt": "Wireless Bluetooth Earbuds with Charging Case, White"
			},
			{
				"url": "https://m.media-amazon.com/images/I/41V80F-ELPL._SX522_.jpg",
				"alt": "Wireless Bluetooth Earbuds with Charging Case, White"
			},
			{
				"url": "https://m.media-amazon.com/images/I/31d4DX4NKTL.jpg",
				"alt": "Wireless Bluetooth Earbuds with Charging Case, White"
			}
		]
	},
	{
		"name": "Apple AirPods 4 Wireless Earbuds, Bluetooth Headphones, Personalised Spatial Audio, Sweat and Water Resistant, USB-C Charging Case, H2 Chip, Up to 30 Hours of Battery Life, Effortless Setup for iPhone",
		"description": "Brand: Apple | Model Name: AirPods 4 | Model Number: MXP63HN/A | ASIN: B0DGJLL7V1 | Colour: White | Form Factor: In Ear | Headphone Form Factor: In Ear | Connectivity Technology: Wireless | Wireless Technology Type: Bluetooth | Bluetooth Version: 5.3 | Personalised Spatial Audio with dynamic head tracking | Apple-designed H2 chip | Voice Isolation for improved call quality | Quick-press controls for music or calls | “Hey Siri” voice activation and Siri Interactions (nod/shake gestures) | Ergonomic redesigned contour and shorter stem for all-day comfort and greater stability | Up to 5 hours listening time on a single charge; up to 30 hours total listening time using charging case | Charging Case: USB-C charging capabilities; more than 10% smaller by volume than previous generation; LED indicators showing charging status and battery level | Dust, sweat, and water resistant rating: IP54 for both AirPods and charging case | Surround Sound feature supported via software | Enclosure Material: Plastic | Box Contents: AirPods 4, Charging Case (USB-C), Documentation (USB-C Charge Cable sold separately) | Battery Average Life: 5 hours (single charge) | Total Battery with Case: 30 hours | Controls: Touch and Voice | Network Connectivity Technology: Wireless Bluetooth | Compatible Devices: Smartphone, Laptop, Tablet, Smart watch, Desktops; seamless pairing with Apple devices; integration with Find My app | Weight: AirPods approx. 0.13 Kilograms (item weight unit) | Age Range Description: Adult | Number of Items: 1 | UPC: 195949688492 | Manufacturer: Apple; Importer: Apple India Private Limited, No.24, 19th floor, Concorde Tower C, UB City, Vittal Mallya Road, Bangalore - 560 001 | Warranty: Apple One (1) Year Limited Warranty | Best Sellers Rank: #494 in Electronics; #111 in In-Ear Headphones | 91% positive ratings from 100K+ customers; 4.0 out of 5 stars (435 global ratings) | Frequently bought together: Apple AirPods 4 with related Apple products | Offers: No Cost EMI, bank discounts, cashback offers as listed on Amazon.in | Delivered by Amazon; Ships from Amazon; Sold by Clicktech Retail Private Ltd | Price: ₹11,999.00 (M.R.P. ₹12,900.00) | Free delivery date estimation as per location | Top Brand: Apple; 100K+ recent orders from this brand; 11+ years on Amazon | IP54 rating ensures resistance to dust and water splashes/rain during workouts or commutes | Redesigned case is compact, pocket-friendly | Integration: effortless setup on iPhone; automatic pairing when opened near device | Additional Features: Spatial Audio for immersive listening, Voice Isolation AI for clearer calls, Siri voice control, quick pairing, Find My support for lost earbuds | Packaging: Contemporary style, White finish | Note: USB-C Charge Cable sold separately; ensure device compatibility | Ratings: average 4.0/5 from 435 reviews",
		"price": 11999.00,
		"category": "Electronics > Headphones, Earbuds & Accessories > Headphones > In-Ear",
		"images": [
			{
				"url": "https://i.postimg.cc/QMHYD0qh/image.png",
				"alt": "Apple AirPods 4 Wireless Earbuds, Bluetooth Headphones, Personalised Spatial Audio, Sweat and Water Resistant, USB-C Charging Case, H2 Chip, Up to 30 Hours of Battery Life, Effortless Setup for iPhone"
			},
			{
				"url": "https://i.postimg.cc/d3yLKPhr/image.png",
				"alt": "Apple AirPods 4 Wireless Earbuds, Bluetooth Headphones, Personalised Spatial Audio, Sweat and Water Resistant, USB-C Charging Case, H2 Chip, Up to 30 Hours of Battery Life, Effortless Setup for iPhone"
			}
		]
	},
	{
		"name": "Samsung Galaxy S24 Ultra 5G AI Smartphone with Galaxy AI (Titanium Gray, 12GB, 256GB Storage), Snapdragon 8 Gen 3, 200 MP Camera with ProVisual Engine and 5000mAh Battery",
		"description": "Brand: Samsung | Model: Galaxy S24 Ultra 5G AI Smartphone | Color: Titanium Gray | Storage: 256 GB | RAM: 12 GB | Operating System: Android 14 | Processor: Snapdragon 8 Gen 3 for Galaxy at 3.39 GHz | Galaxy AI features: mobile AI for creativity, productivity (real-time call translation, advanced photo editing, etc.) | Build: Titanium exterior, sleek design, durable | Display: 17.25 cm (6.8\\\") flat AMOLED, QHD+ resolution 3120 x 1440, 120 Hz refresh rate, 505 PPI, anti-reflective Corning Gorilla Glass | Camera System: Rear main 200 MP sensor with ProVisual Engine (object recognition, improved color tone, noise reduction, detail enhancement), total 4 rear cameras, 12 MP front camera, LED flash; shooting modes include AR Zone, Bixby Vision, Dual Recording, Food, Hyperlapse, Night, Panorama, Photo, Portrait, Portrait Video, Pro, Pro Video, Single Take, Slow Motion, Video; Optical sensor resolution 200 MP; Digital zoom up to 100x; Video capture up to 8K at 30 fps; Effective video resolution ~7680 pixels. | Built-in S Pen: seamless input for notes, sketching, navigation, productivity, artistry. | Battery: Lithium-Ion 5000 mAh capacity; up to all-day use; Fast Charging support (note: charger sold separately). | Connectivity: 5G (unlocked for all carriers), Bluetooth, Wi-Fi, USB Type C, NFC; Wireless network technologies: GSM, Wi-Fi, LTE; GPS geotagging with GLONASS, GPS, BeiDou, Galileo. | Dimensions: 162 x 79 x 9 mm | Weight: 232 grams | Box Contents: Smartphone, Data Cable (Type C-to-C), SIM Ejector Pin, User Manual, Stylus Pen. | SIM: Dual SIM, Nano SIM slots. | Biometric: Fingerprint recognition; Human Interface: Touchscreen with Stylus support. | Material: Glass and Titanium; Form Factor: Bar; Water Resistance: Water Resistant (exact IP rating not specified here). | Headphone Jack: USB Type C (no 3.5mm jack). | Product Features: Fast Charging Support, Dual SIM, Always On Display, Built-In GPS, Mobile Hotspot Capability. | Specific Uses: Photography, Entertainment. | Manufacturer: Samsung; Model Year: 2024; ASIN: B0CS5XW6TN; UPC/Certifications: External Testing Certification ANATEL 206372300953/ Modelo SM-S928B/DS; Importer: Samsung India Electronics Pvt. Ltd., New Delhi contact support.india@samsung.com, Toll Free 1800 40 7267864; Warranty: 1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories. | Best Sellers Rank: #447 in Electronics; #90 in Smartphones. | Customer Reviews: average 4.3 out of 5 stars (1,006 ratings). | Price: ₹87,900.00 | Frequently bought together and offers as per Amazon.in (No Cost EMI, bank discounts, cashback). | Delivered by Amazon; Ships from Amazon; Sold by Clicktech Retail Private Ltd | Top Brand: Samsung; high positive ratings; premium flagship category. | Additional Notes: S Pen integration enhances productivity; Galaxy AI elevates photo/video capabilities; titanium build balances durability and weight; flat display preferred for screen protector compatibility; high-resolution camera system with ProVisual Engine sets industry standard; battery life typically all-day; charger sold separately; water resistance supports usage in light rain/workouts; premium device with long software support lifecycle.",
		"price": 87900.00,
		"category": "Electronics > Mobiles & Accessories > Mobile Phones > Smartphones",
		"images": [
			{
				"url": "https://m.media-amazon.com/images/I/71Nwtop9jtL._SX679_.jpg",
				"alt": "Samsung Galaxy S24 Ultra 5G AI Smartphone with Galaxy AI (Titanium Gray, 12GB, 256GB Storage), Snapdragon 8 Gen 3, 200 MP Camera with ProVisual Engine and 5000mAh Battery"
			}
		]
	},
	{
		"name": "Pilot FKA-1SR-KBOGM Kakuno Boy Fountain Pen, Green",
		"description": "BRAND: Pilot | Model Name: FKA-1SR-KBOGM Kakuno Boy Fountain Pen | Model Number: FKA-1SR-KBOG-M | ASIN: B09TKJHTVY | Colour: Green | Ink Colour: Green | Writing Instrument Form: Fountain Pen | Age Range Description: Kid | Material: Resin (Polyacrylate Resin body) | Nib Material: Stainless Steel, Medium (compatible with Con-40 & CON-70 converters; comes with one ink cartridge) | Ink Base: Water-based cartridge | Grip Type: Contoured ergonomic design suitable for children and adults | Closure Type: Retractable cap with sturdy clip | Subject Character: Smiley Face - Green | Body Shape: Round | Item Dimensions: 13.1 x 1.5 x 2 cm | Item Weight: 0.03 kg | Box Contents: One fountain pen and one ink cartridge (converter sold separately) | Compatible Accessories: Pilot CON-40 & CON-70 converters recommended | Features: Smooth ink flow via reliable capillary action, prevents leaking or drying out | Warranty: 90 Day Warranty; 7-day replacement policy | Seller: UnboxJapan | Manufacturer: Pilot | Manufacturer Contact: as per seller information | Best Sellers Rank: #17,065 in Office Products; #449 in Fountain Pens",
		"price": 1090.00,
		"category": "Office Products > Office Paper Products > Paper > Stationery > Pens, Pencils & Writing Supplies > Pens & Refills > Fountain Pens",
		"images": [
			{
				"url": "https://m.media-amazon.com/images/I/61Ofm3x4erL._SY879_.jpg",
				"alt": "Pilot FKA-1SR-KBOGM Kakuno Boy Fountain Pen, Green"
			}
		]
	},
	{
		"name": "BRUTON Slip-On Sneakers Casual Shoes Loafers for Men's & Boy's - Orange, Size: UK 9",
		"description": "BRAND: BRUTON | Model Name/Number: FITMAN-2 | ASIN: B0CXXX6Q5T | Colour: Orange | Material Type: Synthetic | Closure Type: Pull-On (Slip-On) | Heel Type: Flat | Water Resistance Level: Not Water Resistant | Sole Material: Polyvinyl Chloride | Style: Sneaker / Casual Loafer | Country of Origin: India | Manufacturer: STS Enterprises (BRUTON FOOTWEAR) | Packer: BRUTON FOOTWEAR | Importer: BRUTON FOOTWEAR | Item Weight: 300 g | Item Dimensions (L x W x H): 24 x 11 x 7 cm | Net Quantity: 1.0 Set (1 pair) | Generic Name: Platform | Department: mens | Date First Available: 14 February 2025 | Best Sellers Rank: #49,957 in Shoes & Handbags; #3,868 in Men's Sneakers | Customer Ratings: 4.2 out of 5 stars (4 ratings) | About this item: Classic Slip-On Loafers designed for easy wear; Multi-Occasion Footwear ideal for parties, weddings, everyday casual use; Comfortable daily wear with relaxed fit for all-day comfort; Versatile timeless loafer/sneaker design complements traditional and modern outfits; Package Includes: 1 pair of BRUTON men's casual loafers; Note: Limited to 3 units per customer.",
		"price": 190.00,
		"category": "Fashion > Shoes & Handbags > Shoes > Men's Shoes > Casual Shoes > Sneakers",
		"images": [
			{
				"url": "https://m.media-amazon.com/images/I/61TyRJdTiPL._SY695_.jpg",
				"alt": "BRUTON Slip-On Sneakers Casual Shoes Loafers for Men's & Boy's - Orange, Size: UK 9"
			}
		]
	},
	{
		"name": "Bleaws Wired in-Ear Headphones with Microphone Volume Control Earbuds Noise Isolating 3.5mm Jack Headphones Lightweight Earphones for Samsung, Huawei, iPad, iPhone, iPod, Redmi, PC, Laptop, Tablets, MP3",
		"description": "BRAND: Generic | Model Number: BWH01 | ASIN: B0D54VYGCX | Box Contents: Headphone | Colour: White | Ear Placement: In Ear | Form Factor: In Ear | Impedance: 120 Ohm | Noise Control: Sound Isolation | Connectivity Technology: Wired via 3.5 mm Jack | Compatible Devices: Smartphones, Tablets, Laptops, Desktops (Samsung, Huawei, iPad, iPhone, iPod, Redmi, PC, MP3 players) | Microphone: HD inline microphone for clear calling with noise isolation | Controls: Inline volume control with call answer/end and track selection functionality | Sound: Stereo sound with pure audio and powerful bass | Design: Ergonomic in-ear design for secure fit and comfort; lightweight construction | Product Features: Foldable design; noise-isolating earbuds; tangle-resistant cable implied by inline controls | Enclosure Material: Plastic | Specific Uses: Travel, Music, Hands-free calling, Work, Learning | Compatibility: Universal 3.5mm jack devices including Android and Windows devices | Warranty: 7-day replacement policy | Manufacturer: Bleaws India | Seller: Bleaws international | Manufacturer Contact: Bleaws India | Packer Contact: Bleaws India | Best Sellers Rank: #190,526 in Electronics; #4,459 in In-Ear Headphones | Age Range: Adult | Number of Items: 1",
		"price": 125.00,
		"category": "Electronics > Headphones, Earbuds & Accessories > Headphones > In-Ear",
		"images": [
			{
				"url": "https://m.media-amazon.com/images/I/41GWM5kfhfL._SY879_.jpg",
				"alt": "Bleaws Wired in-Ear Headphones with Microphone Volume Control Earbuds Noise Isolating 3.5mm Jack Headphones Lightweight Earphones"
			}
		]
	},

];

const seedProducts = async () => {
	try {
		// First, log in to get the token
		const loginResponse = await axios.post(`${API_BASE_URL}/users/login`, {
			email: "snu@snu.snu", // Replace with your admin email
			password: "snusnu"    // Replace with your admin password
		});

		// Get the token from cookies
		const cookies = loginResponse.headers['set-cookie'];
		const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
		const token = tokenCookie ? tokenCookie.split(';')[0].split('=')[1] : null;

		if (!token) {
			throw new Error('No token received in login response');
		}

		// Configure axios to use the token in subsequent requests
		const api = axios.create({
			baseURL: API_BASE_URL,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			withCredentials: true // Important for sending cookies
		});

		// Add each product
		for (const product of sampleProducts) {
			try {
				const response = await api.post('/users/products', product);
				console.log(`Added product: ${product.name}`, response.data);
			} catch (error) {
				console.error(`Error adding product ${product.name}:`, error.response?.data || error.message);
			}
		}

		console.log('Seeding completed!');
	} catch (error) {
		console.error('Error during seeding:', error.response?.data || error.message);
	}
};

seedProducts();