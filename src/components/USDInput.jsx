function USDInput({ value, onChange }) {
	return (
		<div className="usd-input-container">
			<div className="input-wrapper">
				<input
					type="number"
					id="usd-amount"
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
