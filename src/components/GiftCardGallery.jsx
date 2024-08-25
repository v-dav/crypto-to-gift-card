import { useState } from 'react';
import giftCardsData from '../db.json';

function GiftCardGallery() {
	const [showCards, setShowCards] = useState(false);

	const toggleCards = () => {
		setShowCards(!showCards);
	};

	const handleCardClick = (link) => {
		window.open(link, '_blank');
	};

	return (
		<div className="gift-card-gallery">
			<button onClick={toggleCards}>
				{showCards ? 'Hide Gift Cards' : 'See All Gift Cards'}
			</button>

			{showCards && (
				<div className="card-grid">
					{giftCardsData.giftCards.map((card) => (
						<div key={card.id} className="card" onClick={() => handleCardClick(card.link)}>
							<img src={card.image} alt={card.name} className="card-image" />
							<div className="card-content">
								<h3>{card.name}</h3>
								<p className="category">{card.category}</p>
								<p className="description">{card.description}</p>
								<p className="values">
									Available values:
									{card.values.map((value, index) => (
										<span key={index}>{card.currency} {value}{index < card.values.length - 1 ? ', ' : ''}</span>
									))}
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default GiftCardGallery;
