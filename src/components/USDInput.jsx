import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import '../styles/USDInput.css';

function USDInput({ value, onChange }) {
	return (
		<div className="usd-input-container">
			<h2>Enter USD Amount</h2>
			<InputGroup className="mb-3">
				<InputGroup.Text className="dollar-sign">
					<FontAwesomeIcon icon={faDollarSign} />
				</InputGroup.Text>
				<FormControl
					type="number"
					id="usd-amount"
					value={value}
					onChange={onChange}
					min="0"
					step="0.01"
					aria-label="USD amount"
				/>
			</InputGroup>
		</div>
	);
}

export default USDInput;
