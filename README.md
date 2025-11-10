# E-commerce Assignment (Full Stack)

A minimal, runnable full-stack e-commerce demo with JWT auth, sample products, and a simple cart + checkout flow.

## Tech Stack
- Frontend: React (Vite) + React Router
- Backend: Node.js + Express.js
- Database: In-memory arrays (no actual DB)
- Auth: JWT (jsonwebtoken) + bcryptjs
- Styling: Minimal CSS

## Features
- Register and Login (`/api/register`, `/api/login`) returning `{ token, user }`
- Demo user auto-created: `demo@demo.com` / `demo123`
- Products listing (`/api/products`) and single product (`/api/products/:id`)
- Cart on the frontend with add/update/remove
- Protected `/api/checkout` with JWT; returns `{ success: true, order }`
- Persistent auth (localStorage)
- Header shows user email and Logout

## Folder Structure
```
ecommerce-assignment/
  backend/
    src/
      data/
      middleware/
      routes/
  frontend/
    src/
      components/
      context/
      pages/
```

## Getting Started

1) Backend
```
cd backend
npm install
npm run start
```
Backend runs at `http://localhost:5000`.

Environment (optional):
- `PORT=5000`
- `JWT_SECRET=your_secret`

2) Frontend
```
cd ../frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`.

By default the frontend calls `http://localhost:5000`. You can change with `VITE_API_URL`.

## API
- POST `/api/register` { name, email, password }
- POST `/api/login` { email, password }
- GET `/api/products`
- GET `/api/products/:id`
- POST `/api/checkout` (requires `Authorization: Bearer <token>`) { items: [{ productId, quantity }] }

## Notes
- Data is in-memory and resets on server restart.
- A simulated MongoDB Atlas connection log is printed on backend start (no real DB).

## E-commerce Assignment (Full-Stack)

A runnable full-stack E-commerce demo app built with:

- Frontend: React (Vite) + React Router
- Backend: Node.js + Express.js
- Database: In-memory arrays (no actual DB)
- Auth: JWT (jsonwebtoken) + bcryptjs
- Styling: Minimal responsive CSS

### Demo Credentials
- Email: `demo@demo.com`
- Password: `demo123`

---

## Folder Structure

```
ecommerce-assignment/
  backend/
    package.json
    server.js
    src/
      data/
        products.js
      middleware/
        auth.js
      routes/
        auth.js
        products.js
        checkout.js
  frontend/
    package.json
    index.html
    vite.config.js
    src/
      main.jsx
      App.jsx
      styles.css
      api.js
      context/
        AuthContext.jsx
        CartContext.jsx
      components/
        Header.jsx
        ProductCard.jsx
      pages/
        LoginRegister.jsx
        Products.jsx
        Cart.jsx
        Checkout.jsx
  .gitignore
```

---

## Quick Start

Open two terminals (one for backend, one for frontend).

### Backend
```
cd backend
npm install
npm run dev
```
Starts at `http://localhost:5000`.

### Frontend
```
cd frontend
npm install
npm run dev
```
Vite will print a local URL (usually `http://localhost:5173`).

If your backend runs elsewhere, set `VITE_API_URL` in `frontend/.env`:
```
VITE_API_URL=http://localhost:5000
```

---

## API Overview
- POST `/api/register` { name, email, password } → `{ user, token }`
- POST `/api/login` { email, password } → `{ user, token }`
- GET `/api/products` → `[products]`
- GET `/api/products/:id` → `{product}`
- POST `/api/checkout` (Auth) { items: [{ productId, quantity }] } → `{ success: true, order }`

---

## Notes
- In-memory users, products, and orders reset on server restart.
- Demo user is seeded at startup: `demo@demo.com` / `demo123`.
- Auth and cart persist on the frontend via `localStorage`.


