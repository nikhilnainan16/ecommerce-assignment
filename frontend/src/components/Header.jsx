import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function Header() {
	const navigate = useNavigate();
	const { user, isAuthenticated, logout } = useAuth();
	const { count } = useCart();

	function handleLogout() {
		logout();
		navigate('/');
	}

	return (
		<header className="header">
			<Link to="/" className="brand">E‑Shop</Link>
			<nav className="nav">
				<Link to="/" className="nav-link">Products</Link>
				<Link to="/cart" className="nav-link">Cart ({count})</Link>
			</nav>
			<div className="auth">
				{isAuthenticated ? (
					<>
						<span className="user-email">{user.email}</span>
						<button className="btn" onClick={handleLogout}>Logout</button>
					</>
				) : (
					<Link to="/login" className="btn">Login</Link>
				)}
			</div>
		</header>
	);
}


