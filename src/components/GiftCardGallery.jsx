import { useState } from 'react';
import giftCardsData from '../db.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/GiftCardGallery.css'

function GiftCardGallery() {
	const [showCards, setShowCards] = useState(false);

	const toggleCards = () => {
		setShowCards(!showCards);
	};

	const handleCardClick = (link) => {
		window.open(link, '_blank');
	};

	return (
		<div className="gift-card-gallery container my-5">
			<button onClick={toggleCards} className="btn btn-primary mb-4">
				{showCards ? 'Hide Gift Cards' : 'See All Gift Cards'}
			</button>

			{showCards && (
				<div className="row card-grid">
					{giftCardsData.giftCards.map((card) => (
						<div key={card.id} className="col-md-4 mb-4">
							<div className="card h-100" onClick={() => handleCardClick(card.link)}>
								<img src={card.image} alt={card.name} className="card-img-top" />
								<div className="card-body">
									<h5 className="card-title">{card.name}</h5>
									<p className="card-text category">{card.category}</p>
									<p className="card-text description">{card.description}</p>
									<p className="card-text values">
										Available values:
										{card.values.map((value, index) => (
											<span key={index}>
												{card.currency} {value}
												{index < card.values.length - 1 ? ', ' : ''}
											</span>
										))}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default GiftCardGallery;
