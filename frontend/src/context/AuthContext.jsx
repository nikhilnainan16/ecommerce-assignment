import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../api.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const isAuthenticated = !!token && !!user;

	useEffect(() => {
		const stored = localStorage.getItem('auth');
		if (stored) {
			try {
				const parsed = JSON.parse(stored);
				if (parsed?.token && parsed?.user) {
					setToken(parsed.token);
					setUser(parsed.user);
				}
			} catch {}
		}
	}, []);

	useEffect(() => {
		if (token && user) {
			localStorage.setItem('auth', JSON.stringify({ token, user }));
		} else {
			localStorage.removeItem('auth');
		}
	}, [token, user]);

	async function login(email, password) {
		const res = await api.login({ email, password });
		setToken(res.token);
		setUser(res.user);
		return res.user;
	}

	async function register(name, email, password) {
		const res = await api.register({ name, email, password });
		setToken(res.token);
		setUser(res.user);
		return res.user;
	}

	function logout() {
		setToken(null);
		setUser(null);
	}

	const value = useMemo(() => ({ user, token, isAuthenticated, login, register, logout }), [user, token, isAuthenticated]);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error('useAuth must be used within AuthProvider');
	return ctx;
}


