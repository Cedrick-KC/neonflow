// Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="vanguard-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Vanguard<span>Studio</span>
        </NavLink>

        {/* Navigation Drawer */}
        <nav className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Projects
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <NavLink to="/contact" className="navbar-cta mobile-cta" onClick={closeMenu}>
            Initiate Project
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <NavLink to="/contact" className="navbar-cta desktop-cta">
          Initiate Project
        </NavLink>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;