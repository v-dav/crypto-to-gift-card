import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import "../styles/WelcomeMessage.css"

function WelcomeMessage() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
		if (!hasSeenWelcome) {
			setIsVisible(true);
		}
	}, []);

	const closeWelcomeMessage = () => {
		setIsVisible(false);
		sessionStorage.setItem('hasSeenWelcome', 'true');
	};

	if (!isVisible) return null;

	return (
		<div className="welcome-overlay">
			<div className="welcome-message">
				<button className="close-button" onClick={closeWelcomeMessage}>
					<FontAwesomeIcon icon={faTimes} />
				</button>
				<h3>Welcome to Bitrefill's Crypto-to-Gift Card Converter!</h3>
				<p>
					Convert your USD to cryptocurrency and find matching gift cards.
					Enter an amount in USD to see its value in your selected cryptocurrency.
				</p>
				<p>
					You can search for a specific gift card or browse all available options below.
				</p>
			</div>
		</div>
	);
}

export default WelcomeMessage;
