import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import CryptoTrackerPage from './components/CryptoTrackerPage';
import giftCardsData from './db.json';
import "./App.css";


function App() {
	const [usdAmount, setUsdAmount] = useState('');
	const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
	const [searchTerm, setSearchTerm] = useState('');
	const [foundCards, setFoundCards] = useState([]);
	const [matchingCards, setMatchingCards] = useState([]);

	const handleUsdChange = (e) => {
		setUsdAmount(e.target.value);
	};

	const handleCryptoChange = (e) => {
		setSelectedCrypto(e.target.value);
	};

	const handleSearch = (term) => {
		setSearchTerm(term);
	};

	useEffect(() => {
		if (searchTerm) {
			const found = giftCardsData.giftCards.filter(card =>
				card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				card.category.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFoundCards(found);
		} else {
			setFoundCards([]);
		}
	}, [searchTerm]);

	useEffect(() => {
		if (usdAmount) {
			const amount = parseFloat(usdAmount);
			const threshold = 5; // $5 threshold for "close" values
			const matching = giftCardsData.giftCards.filter(card => {
				const closestValue = card.values.reduce((prev, curr) =>
					Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev
				);
				return Math.abs(closestValue - amount) <= threshold;
			}).map(card => ({
				...card,
				closestValue: card.values.reduce((prev, curr) =>
					Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev
				)
			}));
			setMatchingCards(matching);
		} else {
			setMatchingCards([]);
		}
	}, [usdAmount]);

	return (
		<Router>
			<div className="app">
				<div className="content-wrapper">
					<Routes>
						<Route path="/" element={
							<Home
								usdAmount={usdAmount}
								selectedCrypto={selectedCrypto}
								matchingCards={matchingCards}
								foundCards={foundCards}
								handleUsdChange={handleUsdChange}
								handleCryptoChange={handleCryptoChange}
								handleSearch={handleSearch}
							/>
						} />
						<Route path="/about" element={<About />} />
						<Route path="/crypto-tracker" element={<CryptoTrackerPage />} />
					</Routes>
				</div>
				<Footer /> 
			</div>
		</Router>
	);
}

export default App;
