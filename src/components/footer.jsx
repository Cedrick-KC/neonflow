// Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="vanguard-footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand-section">
          <Link to="/" className="footer-logo">
            Vanguard<span>Studio</span>
          </Link>

          <p className="footer-description">
            Architecting high-performance web systems, modern user interfaces, and custom software solutions.
          </p>

          <div className="footer-status">
            <span className="status-dot" />
            Accepting Q3/Q4 Contracts
          </div>
        </div>

        {/* Column 1 */}
        <div className="footer-column">
          <h3>Navigation</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Publications</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Resources</h3>
          <Link to="/blog">Technical Notes</Link>
          <Link to="/projects">Case Studies</Link>
          <a href="#top">Back to top ↑</a>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Connect</h3>
          <a href="https://github.com/Cedrick-KC" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com/kar.cedrique" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {currentYear} Vanguard Studio. Engineered by Cedrick.</p>
          <p className="footer-built">
            Built with <span>React</span> & <span>Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;