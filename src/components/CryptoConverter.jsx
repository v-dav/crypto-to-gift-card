import { useState, useEffect } from 'react';
import Tooltip from './Tooltip';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function CryptoConverter({ usdAmount, selectedCrypto }) {
	const [cryptoAmount, setCryptoAmount] = useState(0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const convertCurrency = async () => {
			if (!usdAmount || isNaN(usdAmount) || usdAmount <= 0) {
				setCryptoAmount(0);
				return;
			}

			setLoading(true);
			setError(null);

			try {
				const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${selectedCrypto}&vs_currencies=usd`);
				const rate = response.data[selectedCrypto].usd;
				const converted = usdAmount / rate;
				setCryptoAmount(converted);
			} catch (err) {
				console.error('Error fetching conversion rate:', err);
				setError('Failed to fetch conversion rate (exceeded fetch limit). Please try again in a couple of minutes.');
			} finally {
				setLoading(false);
			}
		};

		convertCurrency();
	}, [usdAmount, selectedCrypto]);

	if (loading) return <p>Converting...</p>;
	if (error) return <p>{error}</p>;

	// Only render the conversion result if usdAmount is a valid number greater than 0
	if (!usdAmount || isNaN(usdAmount) || usdAmount <= 0) return null;

	return (
		<div className="crypto-converter">
			<div className="conversion-result">
				<Tooltip text="This is the USD amount you entered for conversion">
					<span className="usd-amount">
						${parseFloat(usdAmount).toFixed(2)} USD
						<FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
					</span>
				</Tooltip>
				<span className="equals">≈</span>
				<Tooltip text={`This is the equivalent amount in ${selectedCrypto.toUpperCase()} based on current exchange rates`}>
					<span className="crypto-amount">
						{cryptoAmount.toFixed(8)} {selectedCrypto.toUpperCase()}
						<FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
					</span>
				</Tooltip>
			</div>
		</div>
	);
}

export default CryptoConverter;
