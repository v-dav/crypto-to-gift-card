import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/USDInput.css'; // Custom styles for additional theming

function USDInput({ value, onChange }) {
	return (
		<div className="usd-input-container">
			<div className="input-wrapper input-group">
				<span className="input-group-text">$</span>
				<input
					type="number"
					id="usd-amount"
					className="form-control"
					value={value}
					onChange={onChange}
					placeholder="Enter amount (USD)"
					min="0"
					step="0.01"
				/>
			</div>
		</div>
	);
}

export default USDInput;
