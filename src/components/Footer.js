import { Link } from "react-router-dom";

const navigationLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/reservations", text: "Reservations" },
  { to: "/order", text: "Order" },
  { to: "/login", text: "Login" }
];

const socialLinks = [
  { 
    href: "https://www.facebook.com/thelittlelemonshop/",
    text: "Facebook"
  },
  { 
    href: "https://www.instagram.com/littlelemonmoon/",
    text: "Instagram"
  },
  {
    href: "https://www.youtube.com/watch?v=3Li-FfypZYE",
    text: "Join us!"
  }
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <nav className="footer-nav">
          <div className="logo-container">
            <img
              src={require("../assets/footer-logo.png")}
              alt="Little Lemon logo"
              className="footer-logo"
            />
          </div>

          <div className="nav-section">
            <h2 className="footer-header">Navigation</h2>
            <ul className="footer-links" aria-label="Primary footer navigation">
              {navigationLinks.map(link => (
                <li key={link.text}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
              <li>
                <a
                  href={require("../assets/menu.webp")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Menu
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-section">
            <h2 className="footer-header">Contact</h2>
            <address className="footer-links">
              <p>2395 Maldove Way,</p>
              <p>Chicago Illinois</p>
              <p>
                <a href="tel:+16292436827">(629)-243-6827</a>
              </p>
              <p>
                <a
                  href="mailto:info@littlelemon.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  info@littlelemon.com
                </a>
              </p>
            </address>
          </div>

          <div className="social-section">
            <h2 className="footer-header">Connect</h2>
            <ul className="footer-links" aria-label="Social media links">
              {socialLinks.map(link => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}