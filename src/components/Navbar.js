import { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";
import NavLogo from "../assets/nav-logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <nav 
        className="navbar" 
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="navbar-brand">
          <img
            src={NavLogo}
            alt="Little Lemon logo"
            className="nav-logo"
          />

          <button 
            className="menu-toggle"
            onClick={handleToggle}
            aria-expanded={isMenuOpen}
            aria-controls="navigation-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <img 
              src={isMenuOpen ? Close : Hamburger} 
              alt=""
              className="menu-icon"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <Navigation 
          device="desktop" 
          className="desktop-nav" 
          id="desktop-navigation"
        />

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <Navigation 
            device="mobile" 
            className="mobile-nav" 
            id="navigation-menu"
          />
        )}
      </nav>
    </header>
  );
}