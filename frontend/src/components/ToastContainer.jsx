import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import Toast from './Toast.jsx';

const ToastsContext = createContext(null);

export function useToasts() {
	const ctx = useContext(ToastsContext);
	if (!ctx) throw new Error('useToasts must be used within <ToastContainer />');
	return ctx;
}

export default function ToastContainer({ children }) {
	const [toasts, setToasts] = useState([]);
	const idRef = useRef(1);

	const addToast = useCallback(({ message, durationMs = 2500, id }) => {
		const toastId = id || `t_${idRef.current++}`;
		setToasts(prev => [...prev, { id: toastId, message, durationMs }]);
		return toastId;
	}, []);

	const removeToast = useCallback((id) => {
		setToasts(prev => prev.filter(t => t.id !== id));
	}, []);

	const value = useMemo(() => ({ addToast, removeToast }), [addToast, removeToast]);

	return (
		<ToastsContext.Provider value={value}>
			{children}
			<div className="toast-container" aria-live="polite" aria-atomic="true">
				{toasts.map(t => (
					<Toast key={t.id} id={t.id} message={t.message} durationMs={t.durationMs} onClose={removeToast} />
				))}
			</div>
		</ToastsContext.Provider>
	);
}


