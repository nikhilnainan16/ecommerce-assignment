import { useEffect, useState } from 'react';

export default function Toast({ id, message, durationMs = 2500, onClose }) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		// enter animation
		const enter = setTimeout(() => setVisible(true), 10);
		// schedule close
		const timer = setTimeout(() => {
			setVisible(false);
			setTimeout(() => onClose?.(id), 250);
		}, durationMs);
		return () => {
			clearTimeout(timer);
			clearTimeout(enter);
		};
	}, [durationMs, id, onClose]);

	return (
		<div className={`toast ${visible ? 'show' : 'hide'}`} role="status" aria-live="polite">
			{message}
		</div>
	);
}


