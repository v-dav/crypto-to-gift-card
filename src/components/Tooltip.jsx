import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Tooltip.css'; // Custom styles for the tooltip

function Tooltip({ text, children }) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<div
			className="tooltip-container position-relative d-inline-block"
			onMouseEnter={() => setIsVisible(true)}
			onMouseLeave={() => setIsVisible(false)}
		>
			{children}
			{isVisible && (
				<div className="tooltip-text position-absolute bg-dark text-white p-2 rounded shadow-sm">
					{text}
				</div>
			)}
		</div>
	);
}

export default Tooltip;
