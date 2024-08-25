import { useState, useEffect } from 'react';
import Tooltip from './Tooltip';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import '../styles/CryptoConverter.css';

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

	if (loading) return <Spinner animation="border" role="status" className="d-block mx-auto" />;
	if (error) return <p className="text-danger text-center">{error}</p>;
	if (!usdAmount || isNaN(usdAmount) || usdAmount <= 0) return null;

	return (
		<Container className="crypto-converter my-4">
			<Card className="glassmorphism">
				<Card.Body>
					<Row className="align-items-center text-center">
						<Col xs={12} md={5}>
							<Tooltip text="This is the USD amount you entered for conversion">
								<span className="amount usd-amount">
									${parseFloat(usdAmount).toFixed(2)} USD
									<FontAwesomeIcon icon={faInfoCircle} className="info-icon ms-2" />
								</span>
							</Tooltip>
						</Col>
						<Col xs={12} md={2} className="my-3 my-md-0">
							<FontAwesomeIcon icon={faExchangeAlt} className="exchange-icon" />
						</Col>
						<Col xs={12} md={5}>
							<Tooltip text={`This is the equivalent amount in ${selectedCrypto.toUpperCase()} based on current exchange rates`}>
								<span className="amount crypto-amount">
									{cryptoAmount.toFixed(8)} {selectedCrypto.toUpperCase()}
									<FontAwesomeIcon icon={faInfoCircle} className="info-icon ms-2" />
								</span>
							</Tooltip>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default CryptoConverter;
