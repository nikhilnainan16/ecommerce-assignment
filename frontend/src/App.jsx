import { Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Products from './pages/Products.jsx';
import LoginRegister from './pages/LoginRegister.jsx';
import Cart from './pages/Cart.jsx';
import Header from './components/Header.jsx';
import ToastContainer from './components/ToastContainer.jsx';

function AppRoutes() {
	const { isAuthenticated } = useAuth();
	return (
		<Routes>
			<Route path="/" element={<Products />} />
			<Route path="/login" element={<LoginRegister />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={isAuthenticated ? <Cart checkoutDirect /> : <Navigate to="/login" replace />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
}

export default function App() {
	return (
		<AuthProvider>
			<CartProvider>
				<ToastContainer>
					<div className="container">
						<Header />
						<AppRoutes />
						<footer className="footer">
							<p>
								Built for <Link to="/">E-commerce Assignment</Link>
							</p>
						</footer>
					</div>
				</ToastContainer>
			</CartProvider>
		</AuthProvider>
	);
}


