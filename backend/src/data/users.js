import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

export const users = [];

export async function createUser({ email, password, name }) {
	const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
	if (existing) {
		throw new Error('User already exists');
	}
	const salt = await bcrypt.genSalt(10);
	const passwordHash = await bcrypt.hash(password, salt);
	const user = {
		id: 'u' + (users.length + 1),
		email,
		name,
		passwordHash,
		createdAt: new Date().toISOString()
	};
	users.push(user);
	return user;
}

export async function validateUser(email, password) {
	const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
	if (!user) return null;
	const isValid = await bcrypt.compare(password, user.passwordHash);
	return isValid ? user : null;
}

export async function createDemoUser() {
	const demoEmail = 'demo@demo.com';
	const demoExists = users.find(u => u.email.toLowerCase() === demoEmail);
	if (demoExists) return demoExists;
	return await createUser({ email: demoEmail, password: 'demo123', name: 'Demo User' });
}


