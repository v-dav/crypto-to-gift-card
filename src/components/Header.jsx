import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import CryptoWidget from './CryptoWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import '../styles/Header.css';

function Header({ onCryptoChange, onSearch }) {
	const [selectedCrypto, setSelectedCrypto] = useState('Select Crypto');

	const handleSearch = (e) => {
		onSearch(e.target.value);
	};

	const handleCryptoSelect = (eventKey, event) => {
		setSelectedCrypto(event.target.textContent);
		onCryptoChange({ target: { value: eventKey } });
	};

	return (
		<header className="header">
			<div className="logo">
				<p>Crypto-to-Gift Card Converter</p>
			</div>
			<div className="search-bar">
				<FontAwesomeIcon icon={faSearch} />
				<input
					type="text"
					placeholder="Search for a gift card"
					onChange={handleSearch}
				/>
			</div>
			<div className="crypto-dropdown">
				<Dropdown onSelect={handleCryptoSelect}>
					<Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
						{selectedCrypto}
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item eventKey="bitcoin">BTC</Dropdown.Item>
						<Dropdown.Item eventKey="ethereum">ETH</Dropdown.Item>
						<Dropdown.Item eventKey="binancecoin">BNB</Dropdown.Item>
						<Dropdown.Item eventKey="solana">SOL</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<CryptoWidget />
			<div className="documentation-link">
				<Link to="/about">
					<FontAwesomeIcon icon={faCircleQuestion} />
				</Link>
			</div>
		</header>
	);
}

export default Header;
