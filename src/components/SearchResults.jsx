import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/SearchResults.css';

function SearchResults({ foundCards }) {
	if (foundCards.length === 0) {
		return null;
	}

	const handleCardClick = (link) => {
		window.open(link, '_blank');
	};

	return (
		<Container className="search-results py-5">
			<h2 className="text-center mb-4">
				<FontAwesomeIcon icon={faSearch} className="me-2" />
				Found Cards
			</h2>
			<Row xs={1} sm={2} md={3} lg={4} className="g-4">
				{foundCards.map((card) => (
					<Col key={card.id}>
						<Card className="h-100 found-card" onClick={() => handleCardClick(card.link)}>
							<Card.Img variant="top" src={card.image} alt={card.name} />
							<Card.Body>
								<Card.Title>{card.name}</Card.Title>
								<Card.Text className="category">{card.category}</Card.Text>
								<Card.Text className="values">
									Values: {card.values.join(', ')} {card.currency}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default SearchResults;
