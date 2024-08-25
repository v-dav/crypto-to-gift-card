function MatchingGiftCards({ cards }) {
	if (cards.length === 0) return null;

	const handleCardClick = (link) => {
		window.open(link, '_blank');
	};

	return (
		<div className="matching-gift-cards">
			<h2>Your Gift Cards</h2>
			<div className="card-grid">
				{cards.map((card) => (
					<div key={card.id} className="card" onClick={() => handleCardClick(card.link)}>
						<img src={card.image} alt={card.name} className="card-image" />
						<div className="card-content">
							<h3>{card.name}</h3>
							<p className="category">{card.category}</p>
							<p className="matching-value">
								Closest value: {card.currency} {card.closestValue}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default MatchingGiftCards;
