import React, { useState } from 'react';
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
				<a href="https://www.bitrefill.com" target="_blank" rel="noopener noreferrer">
					<svg xmlns="http://www.w3.org/2000/svg" width="111" height="28" fill="none">
						<path fill="currentColor" d="m0 9.78 5.05-3.76V22.2h6.17c2.32 0 3.94-1.5 3.94-3.69 0-2.18-1.62-3.68-3.94-3.68H7.83l4.33-4.33c1.2-1.2 1.46-1.95 1.46-2.78 0-1.65-1.28-2.82-3.3-2.82H0V.38h11.17c4.36 0 7.48 2.63 7.48 6.42 0 1.8-.38 3.16-1.73 4.51l-.9.9A7.39 7.39 0 0 1 20.18 19c0 4.55-3.64 7.7-8.76 7.7H0V9.8ZM22.94.39h5.04v5.56h-5.04V.4Zm0 10.45 5.04-3.76V26.7h-5.04V10.84Zm8.65 9.46V5.96l5.04-3.91v5.4h5.5v4.71h-5.5v7.6c0 1.39.86 2.25 2.25 2.25h3.24v4.7h-4.17c-3.95 0-6.36-2.4-6.36-6.4ZM51.32 7.45h3.39v4.7h-3.23c-1.4 0-2.26.86-2.26 2.26v12.3h-5.04V14.6c0-4.6 2.56-7.15 7.14-7.15Zm3.69 9.63c0-5.45 3.8-10 9.85-10 6.02 0 9.85 4.2 9.85 10 0 .26 0 .52-.04.79H63.4l5.78-3.95a4.8 4.8 0 0 0-4.32-2.4c-3.24 0-5.15 2.52-5.15 5.56 0 3.76 2.4 5.56 5.34 5.56 1.73 0 3.27-.75 4.17-2.25h5.04c-1.31 4.4-5.19 6.69-9.21 6.69-5.26 0-10.04-3.31-10.04-10ZM84.45.39h5.68v4.7H84.6c-1.39 0-2.25.86-2.25 2.25v1.7h10.3V26.7H87.6V13.73h-5.27V26.7H77.3V7.53c0-4.6 2.57-7.14 7.15-7.14Zm12.34 3.52L101.83 0v26.7h-5.04V3.9Zm9.17 0L111 0v26.7h-5.04V3.9Z"></path>
					</svg>
				</a>
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
