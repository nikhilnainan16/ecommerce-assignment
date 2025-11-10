const DEFAULT_BASE = 'http://localhost:5000';
const BASE_URL = import.meta.env.VITE_API_URL || DEFAULT_BASE;

export async function apiRequest(path, { method = 'GET', body, token } = {}) {
	const headers = { 'Content-Type': 'application/json' };
	if (token) headers.Authorization = `Bearer ${token}`;
	const res = await fetch(`${BASE_URL}${path}`, {
		method,
		headers,
		body: body ? JSON.stringify(body) : undefined
	});
	if (!res.ok) {
		let message = `Request failed (${res.status})`;
		try {
			const err = await res.json();
			message = err.error || message;
		} catch {}
		throw new Error(message);
	}
	return res.json();
}

export const api = {
	register: (data) => apiRequest('/api/register', { method: 'POST', body: data }),
	login: (data) => apiRequest('/api/login', { method: 'POST', body: data }),
	getProducts: () => apiRequest('/api/products'),
	getProduct: (id) => apiRequest(`/api/products/${id}`),
	checkout: (items, token) => apiRequest('/api/checkout', { method: 'POST', body: { items }, token })
};


