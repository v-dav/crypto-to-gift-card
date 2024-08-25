function USDInput({ value, onChange }) {
	return (
		<div className="usd-input-container">
			<label htmlFor="usd-amount">Enter Amount (USD)</label>
			<div className="input-wrapper">
				<span className="currency-symbol">$</span>
				<input
					type="number"
					id="usd-amount"
					value={value}
					onChange={onChange}
					placeholder="0.00"
					min="0"
					step="0.01"
				/>
			</div>
		</div>
	);
}

export default USDInput;
