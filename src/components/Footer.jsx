import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Created with ❤️ by Vladimir Davidov</p>
        <div className="social-links">
          <a href="https://github.com/v-dav" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/v-dav/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://utveckvlad.com" target="_blank" rel="noopener noreferrer" aria-label="Personal Website">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          <a href="https://medium.com/@v-dav" target="_blank" rel="noopener noreferrer" aria-label="Blog">
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
