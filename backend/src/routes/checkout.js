import { Router } from 'express';
import { authRequired } from '../middleware/auth.js';
import { products } from '../data/products.js';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.post('/checkout', authRequired, (req, res) => {
	const { items } = req.body || {};
	if (!Array.isArray(items) || items.length === 0) {
		return res.status(400).json({ error: 'items array is required' });
	}

	let total = 0;
	const detailedItems = [];
	for (const item of items) {
		const { productId, quantity } = item || {};
		const product = products.find(p => p.id === productId);
		if (!product) {
			return res.status(400).json({ error: `Invalid product: ${productId}` });
		}
		const qty = Math.max(1, Number(quantity) || 1);
		const lineTotal = product.price * qty;
		total += lineTotal;
		detailedItems.push({
			productId: product.id,
			title: product.title,
			price: product.price,
			quantity: qty,
			lineTotal: Number(lineTotal.toFixed(2))
		});
	}

	const order = {
		id: uuidv4(),
		userId: req.user.id,
		items: detailedItems,
		total: Number(total.toFixed(2)),
		createdAt: new Date().toISOString()
	};

	return res.json({ success: true, order });
});

export default router;


