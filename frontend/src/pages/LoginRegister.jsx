import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function LoginRegister() {
	const navigate = useNavigate();
	const { login, register } = useAuth();
	const [mode, setMode] = useState('login'); // 'login' | 'register'
	const [form, setForm] = useState({ name: '', email: '', password: '' });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	function handleChange(e) {
		setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		setError('');
		try {
			if (mode === 'login') {
				await login(form.email, form.password);
			} else {
				await register(form.name, form.email, form.password);
			}
			navigate('/');
		} catch (err) {
			setError(err.message || 'Something went wrong');
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="auth-container">
			<div className="card">
				<h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
				<form onSubmit={handleSubmit} className="form">
					{mode === 'register' && (
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input id="name" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
						</div>
					)}
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input id="password" name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
					</div>
					{error && <div className="error">{error}</div>}
					<button className="btn primary" disabled={loading}>{loading ? 'Please wait...' : (mode === 'login' ? 'Login' : 'Create Account')}</button>
				</form>
				<div className="toggle">
					{mode === 'login' ? (
						<p>New here? <button className="link" onClick={() => setMode('register')}>Create an account</button></p>
					) : (
						<p>Already have an account? <button className="link" onClick={() => setMode('login')}>Login</button></p>
					)}
					<div className="hint">Demo user: demo@demo.com / demo123</div>
				</div>
			</div>
		</div>
	);
}


