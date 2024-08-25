import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Footer.css"

function Footer() {
	return (
		<footer className="footer bg-dark text-light py-4">
			<div className="container text-center">
				<p className="mb-3">Created with ❤️ by Vladimir Davidov</p>
				<div className="social-links d-flex justify-content-center gap-4">
					<a href="https://github.com/v-dav" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-light">
						<FontAwesomeIcon icon={faGithub} size="2x" />
					</a>
					<a href="https://www.linkedin.com/in/v-dav/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light">
						<FontAwesomeIcon icon={faLinkedin} size="2x" />
					</a>
					<a href="https://utveckvlad.com" target="_blank" rel="noopener noreferrer" aria-label="Personal Website" className="text-light">
						<FontAwesomeIcon icon={faGlobe} size="2x" />
					</a>
					<a href="https://medium.com/@v-dav" target="_blank" rel="noopener noreferrer" aria-label="Blog" className="text-light">
						<FontAwesomeIcon icon={faMedium} size="2x" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
