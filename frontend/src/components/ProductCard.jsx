import { useState } from 'react';

export default function ProductCard({ product, onAdd }) {
	const [qty, setQty] = useState(1);
	const imageSrc = product.image || 'https://via.placeholder.com/400x240?text=Product';

	function handleAdd() {
		const n = Math.max(1, Number(qty) || 1);
		onAdd?.(product, n);
		setQty(1);
	}

	function onKeyDown(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleAdd();
		}
	}

	return (
		<div className="card product-card hover-lift">
			<img src={imageSrc} alt={product.title} className="product-image" />
			<div className="product-content">
				<h3 className="product-title">{product.title}</h3>
				<p className="muted product-desc" title={product.description}>{product.description}</p>
				<div className="row product-meta">
					<div className="badge">{product.category || 'Accessories'}</div>
					<div className="price">${product.price.toFixed(2)}</div>
				</div>
				<div className="row add-row">
					<label className="sr-only" htmlFor={`qty-${product.id}`}>Quantity</label>
					<input
						id={`qty-${product.id}`}
						type="number"
						min="1"
						value={qty}
						onChange={e => setQty(Number(e.target.value || 1))}
						onKeyDown={onKeyDown}
						className="qty-input"
						aria-label={`Set quantity for ${product.title}`}
					/>
					<button className="btn primary" onClick={handleAdd} aria-label={`Add ${qty} of ${product.title} to cart`}>Add</button>
				</div>
			</div>
		</div>
	);
}


