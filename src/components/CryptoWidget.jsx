import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/CryptoWidget.css';

function CryptoWidget() {
	const [isOpen, setIsOpen] = useState(false);
	const [cryptoData, setCryptoData] = useState([]);

	useEffect(() => {
		if (isOpen) {
			fetchCryptoData();
			const interval = setInterval(fetchCryptoData, 60000); // Update every minute
			return () => clearInterval(interval);
		}
	}, [isOpen]);

	const fetchCryptoData = async () => {
		try {
			const response = await axios.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'
			);
			setCryptoData(response.data);
		} catch (error) {
			console.error('Error fetching crypto data:', error);
		}
	};

	const toggleWidget = () => setIsOpen(!isOpen);

	return (
		<div className="crypto-widget">
			<button onClick={toggleWidget} className="widget-toggle">
				<FontAwesomeIcon icon={faChartLine} />
				Price Tracker
			</button>
			{isOpen && (
				<div className="widget-content">
					<button onClick={toggleWidget} className="close-widget">
						<FontAwesomeIcon icon={faTimes} />
					</button>
					<h3>Top 5 Cryptocurrencies</h3>
					<ul>
						{cryptoData.map((crypto) => (
							<li key={crypto.id}>
								<div className="crypto-info">
									<img src={crypto.image} alt={crypto.name} width="20" height="20" />
									<span className="crypto-name">{crypto.name} ({crypto.symbol.toUpperCase()})</span>
								</div>
								<div className="crypto-price">
									<span className="current-price">${crypto.current_price.toFixed(2)}</span>
									<span className={`price-change ${crypto.price_change_percentage_24h > 0 ? 'positive' : 'negative'}`}>
										{crypto.price_change_percentage_24h.toFixed(2)}%
									</span>
								</div>
							</li>
						))}
					</ul>
					<a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer" className="more-info">
						Get More
					</a>
				</div>
			)}
		</div>
	);
}

export default CryptoWidget;
