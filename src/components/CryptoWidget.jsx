import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import '../styles/CryptoWidget.css';

function CryptoWidget() {

	return (
		<div className="crypto-widget">
			<Link to="/crypto-tracker" className="btn btn-outline-light widget-toggle">
				<FontAwesomeIcon icon={faChartLine} className="me-2" />
				Price Tracker
			</Link>
		</div>
	);
}

export default CryptoWidget;
