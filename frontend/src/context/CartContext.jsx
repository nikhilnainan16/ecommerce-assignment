import { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
	switch (action.type) {
		case 'ADD': {
			const { product, quantity = 1 } = action;
			const existing = state.items.find(i => i.product.id === product.id);
			let items;
			if (existing) {
				items = state.items.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i);
			} else {
				items = [...state.items, { product, quantity }];
			}
			return { ...state, items };
		}
		case 'UPDATE': {
			const { productId, quantity } = action;
			const qty = Math.max(1, quantity);
			return { ...state, items: state.items.map(i => i.product.id === productId ? { ...i, quantity: qty } : i) };
		}
		case 'REMOVE': {
			const { productId } = action;
			return { ...state, items: state.items.filter(i => i.product.id !== productId) };
		}
		case 'CLEAR':
			return { items: [] };
		default:
			return state;
	}
}

export function CartProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, { items: [] });

	const total = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
	const count = state.items.reduce((sum, i) => sum + i.quantity, 0);

	const value = useMemo(() => ({
		items: state.items,
		total,
		count,
		getTotal: () => total,
		getCount: () => count,
		addToCart: (product, quantity = 1) => dispatch({ type: 'ADD', product, quantity }),
		updateQuantity: (productId, quantity) => dispatch({ type: 'UPDATE', productId, quantity }),
		removeFromCart: (productId) => dispatch({ type: 'REMOVE', productId }),
		clearCart: () => dispatch({ type: 'CLEAR' })
	}), [state.items, total, count]);

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error('useCart must be used within CartProvider');
	return ctx;
}


