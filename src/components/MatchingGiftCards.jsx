import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import '../styles/MatchingGiftCards.css';

function MatchingGiftCards({ cards }) {
	if (cards.length === 0) return null;

	const handleCardClick = (link) => {
		window.open(link, '_blank');
	};

	return (
		<Container className="matching-gift-cards py-5">
			<h2 className="text-center mb-4">
				<FontAwesomeIcon icon={faGift} className="me-2" />
				Gift Cards for this Amount
			</h2>
			<Row xs={1} sm={2} md={3} lg={4} className="g-4">
				{cards.map((card) => (
					<Col key={card.id}>
						<Card className="h-100 gift-card" onClick={() => handleCardClick(card.link)}>
							<Card.Img variant="top" src={card.image} alt={card.name} />
							<Card.Body>
								<Card.Title>{card.name}</Card.Title>
								<Card.Text className="category">{card.category}</Card.Text>
								<Card.Text className="matching-value">
									Closest value: ${card.closestValue}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default MatchingGiftCards;
