import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import { api } from '../api.js';
import { useState } from 'react';

export default function Cart({ checkoutDirect = false }) {
	const navigate = useNavigate();
	const { isAuthenticated, token } = useAuth();
	const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');

	async function handleCheckout() {
		if (!isAuthenticated) {
			navigate('/login');
			return;
		}
		if (items.length === 0) return;
		setLoading(true);
		setMessage('');
		try {
			const payload = items.map(i => ({ productId: i.product.id, quantity: i.quantity }));
			const res = await api.checkout(payload, token);
			clearCart();
			setMessage(`Order placed! ID: ${res.order.id}, Total: $${res.order.total}`);
		} catch (err) {
			setMessage(err.message || 'Checkout failed');
		} finally {
			setLoading(false);
		}
	}

	if (checkoutDirect) {
		// If navigated to /checkout, immediately attempt checkout then show cart view
		if (!loading && items.length > 0) {
			handleCheckout();
		}
	}

	return (
		<div className="page">
			<h2>Your Cart</h2>
			{items.length === 0 ? (
				<div className="center">Your cart is empty.</div>
			) : (
				<div className="cart">
					{items.map(({ product, quantity }) => (
						<div key={product.id} className="cart-item">
							<img src={product.image} alt={product.title} />
							<div className="cart-info">
								<h4>{product.title}</h4>
								<p>${product.price.toFixed(2)}</p>
								<div className="qty">
									<button onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))}>-</button>
									<input
										type="number"
										min="1"
										value={quantity}
										onChange={e => updateQuantity(product.id, Number(e.target.value || 1))}
									/>
									<button onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
								</div>
								<button className="btn danger" onClick={() => removeFromCart(product.id)}>Remove</button>
							</div>
						</div>
					))}
					<div className="cart-summary">
						<div className="total">Total: ${total.toFixed(2)}</div>
						<button className="btn primary" disabled={loading || items.length === 0} onClick={handleCheckout}>
							{loading ? 'Processing...' : 'Checkout'}
						</button>
						{message && <div className="success">{message}</div>}
					</div>
				</div>
			)}
		</div>
	);
}


