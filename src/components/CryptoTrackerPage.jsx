import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import '../styles/CryptoTrackerPage.css';

function CryptoTrackerPage() {
	const [cryptoData, setCryptoData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchCryptoData();
		const interval = setInterval(fetchCryptoData, 60000); // Update every minute
		return () => clearInterval(interval);
	}, []);

	const fetchCryptoData = async () => {
		try {
			setLoading(true);
			const response = await axios.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
			);
			setCryptoData(response.data);
			setError(null);
		} catch (error) {
			console.error('Error fetching crypto data:', error);
			setError('Failed to fetch cryptocurrency data. Please try again later.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>

			<Container className="crypto-tracker-page py-5">
				<h1 className="text-center mb-5">
					Cryptocurrency Price Tracker
				</h1>
				{loading ? (
					<div className="text-center">
						<Spinner animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					</div>
				) : error ? (
					<Alert variant="danger">{error}</Alert>
				) : (
					<Row xs={1} md={2} lg={3} className="g-4">
						{cryptoData.map((crypto) => (
							<Col key={crypto.id}>
								<Card className="h-100 crypto-card">
									<Card.Body>
										<Card.Title className="d-flex align-items-center mb-3">
											<img src={crypto.image} alt={crypto.name} width="30" height="30" className="me-2" />
											<span>{crypto.name}</span>
										</Card.Title>
										<Card.Text as="div">
											<p className="mb-1">
												Price: <strong>${crypto.current_price.toFixed(2)}</strong>
											</p>
											<p className={`mb-1 ${crypto.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}`}>
												24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%
											</p>
											<p className="mb-1">Market Cap: ${crypto.market_cap.toLocaleString()}</p>
										</Card.Text>
									</Card.Body>
									<Card.Footer className="text-center">
										<Button
											variant="outline-primary"
											href={`https://www.coingecko.com/en/coins/${crypto.id}`}
											target="_blank"
											rel="noopener noreferrer"
										>
											More Info <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
										</Button>
									</Card.Footer>
								</Card>
							</Col>
						))}
					</Row>
				)}
			</Container>
			<div className='return-to-main'>
				<Link to="/" className="btn btn-outline-light">
					<FontAwesomeIcon icon={faHome} className="me-2" />
					Return to Main Page
				</Link>
			</div>
		</>
	);
}

export default CryptoTrackerPage;
