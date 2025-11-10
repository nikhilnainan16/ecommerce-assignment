import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

export function authRequired(req, res, next) {
	const authHeader = req.headers.authorization || '';
	const [, token] = authHeader.split(' ');
	if (!token) {
		return res.status(401).json({ error: 'Authorization token required' });
	}
	try {
		const payload = jwt.verify(token, JWT_SECRET);
		req.user = payload;
		next();
	} catch (err) {
		return res.status(401).json({ error: 'Invalid or expired token' });
	}
}

export function signToken(user) {
	return jwt.sign(
		{ id: user.id, email: user.email, name: user.name },
		JWT_SECRET,
		{ expiresIn: '7d' }
	);
}


