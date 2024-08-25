import { useState, useEffect } from 'react';
import axios from 'axios';

function CryptoConverter({ usdAmount, selectedCrypto }) {
	const [cryptoAmount, setCryptoAmount] = useState(0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const convertCurrency = async () => {
			if (!usdAmount || usdAmount <= 0) {
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
				setError('Failed to fetch conversion rate. Please try again later.');
			} finally {
				setLoading(false);
			}
		};

		convertCurrency();
	}, [usdAmount, selectedCrypto]);

	if (loading) return <p>Converting...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div className="crypto-converter">
			<p>Approximately {cryptoAmount.toFixed(8)} {selectedCrypto.toUpperCase()}</p>
		</div>
	);
}

export default CryptoConverter;
