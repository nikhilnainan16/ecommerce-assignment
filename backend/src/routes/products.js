import { Router } from 'express';
import { products } from '../data/products.js';

const router = Router();

router.get('/products', (req, res) => {
	return res.json(products);
});

router.get('/products/:id', (req, res) => {
	const product = products.find(p => p.id === req.params.id);
	if (!product) return res.status(404).json({ error: 'Product not found' });
	return res.json(product);
});

export default router;


