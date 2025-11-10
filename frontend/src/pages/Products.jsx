import { useEffect, useMemo, useState } from 'react';
import { api } from '../api.js';
import { useCart } from '../context/CartContext.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { useToasts } from '../components/ToastContainer.jsx';

export default function Products() {
	const [products, setProducts] = useState([]);
	const [query, setQuery] = useState('');
	const [debounced, setDebounced] = useState('');
	const [category, setCategory] = useState('All');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const { addToCart } = useCart();
	const { addToast } = useToasts();

	useEffect(() => {
		let mounted = true;
		api.getProducts()
			.then(data => {
				if (!mounted) return;
				// Enrich with categories and image fallbacks
				const categorized = data.map(p => ({
					...p,
					category: inferCategory(p),
					image: p.image || 'https://via.placeholder.com/400x240?text=Product'
				}));
				setProducts(categorized);
			})
			.catch(err => setError(err.message || 'Failed to load products'))
			.finally(() => setLoading(false));
		return () => { mounted = false; };
	}, []);

	// Debounce search
	useEffect(() => {
		const t = setTimeout(() => setDebounced(query.trim().toLowerCase()), 300);
		return () => clearTimeout(t);
	}, [query]);

	const filtered = useMemo(() => {
		let list = products;
		if (category !== 'All') {
			list = list.filter(p => (p.category || '').toLowerCase() === category.toLowerCase());
		}
		if (debounced) {
			list = list.filter(p =>
				(p.title || '').toLowerCase().includes(debounced) ||
				(p.description || '').toLowerCase().includes(debounced)
			);
		}
		return list;
	}, [products, debounced, category]);

	function handleAdd(product, qty) {
		addToCart(product, qty);
		addToast({ message: `Added ${qty} x ${product.title} to cart` });
	}

	if (loading) return <div className="center">Loading products...</div>;
	if (error) return <div className="center error">{error}</div>;

	return (
		<div className="page">
			<div className="filters">
				<input
					type="text"
					placeholder="Search products..."
					value={query}
					onChange={e => setQuery(e.target.value)}
					className="filter-input"
					aria-label="Search products"
				/>
				<select
					className="filter-select"
					value={category}
					onChange={e => setCategory(e.target.value)}
					aria-label="Filter by category"
				>
					<option>All</option>
					<option>Phones</option>
					<option>Keyboards</option>
					<option>Laptops</option>
					<option>Accessories</option>
				</select>
				<button className="btn" onClick={() => { setQuery(''); setCategory('All'); }} aria-label="Clear filters">Clear</button>
			</div>
			<div className="grid">
				{filtered.map(p => (
					<ProductCard key={p.id} product={p} onAdd={handleAdd} />
				))}
			</div>
		</div>
	);
}

function inferCategory(p) {
	const title = (p.title || '').toLowerCase();
	if (title.includes('keyboard')) return 'Keyboards';
	if (title.includes('laptop')) return 'Laptops';
	if (title.includes('phone') || title.includes('watch')) return 'Accessories';
	if (title.includes('charger') || title.includes('speaker') || title.includes('headphones')) return 'Accessories';
	return 'Accessories';
}

