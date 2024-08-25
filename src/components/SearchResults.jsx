function SearchResults({ foundCards }) {
	if (foundCards.length === 0) {
		return null;
	}

	const handleCardClick = (link) => {
		window.open(link, '_blank');
	};

	return (
		<div className="search-results">
			<h2>Found Cards</h2>
			<div className="card-grid">
				{foundCards.map((card) => (
					<div key={card.id} className="card" onClick={() => handleCardClick(card.link)}>
						<img src={card.image} alt={card.name} className="card-image" />
						<div className="card-content">
							<h3>{card.name}</h3>
							<p className="category">{card.category}</p>
							<p className="values">
								Values: {card.values.join(', ')} {card.currency}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default SearchResults;
