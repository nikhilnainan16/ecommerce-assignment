import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { products } from './data/products.js';
import { users, createDemoUser } from './data/users.js';
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import checkoutRoutes from './routes/checkout.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Simulated MongoDB Atlas connection (optional)
function simulateMongoConnection() {
	console.log('Attempting to connect to MongoDB Atlas...');
	setTimeout(() => {
		console.log('Connected to MongoDB Atlas (simulated).');
	}, 500);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Seed demo user on startup
await createDemoUser();

// Log loaded product count
console.log('Loaded', products.length, 'products');

// Routes
app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api', checkoutRoutes);

// Health
app.get('/api/health', (req, res) => {
	res.json({
		ok: true,
		uptime: process.uptime(),
		users: users.length,
		products: products.length
	});
});

app.listen(PORT, () => {
	console.log(`Backend API listening on http://localhost:${PORT}`);
	simulateMongoConnection();
});


