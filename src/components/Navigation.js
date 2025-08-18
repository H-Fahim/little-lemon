import { Link } from "react-router-dom";
import NavLogo from "../assets/nav-logo.png";

const navigationLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/reservations", text: "Reservations" },
  { to: "/order", text: "Order" },
  { to: "/login", text: "Login" }
];

export default function Navigation({ device, className, id }) {
  return (
    <nav 
      className={`navigation ${className} ${device}`}
      id={id}
      aria-label={`${device} navigation`}
    >
      {device === "desktop" && (
        <Link to="/" className="nav-logo-link">
          <img
            src={NavLogo}
            alt="Little Lemon logo"
            className="nav-image"
          />
        </Link>
      )}
      
      <ul className="nav-links">
        {navigationLinks.map(({ to, text }) => (
          <li key={text}>
            <Link to={to} className="nav-link hover-effect">
              {text}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/menu.webp"
            target="_blank"
            rel="noreferrer"
            className="nav-link hover-effect"
          >
            Menu
          </a>
        </li>
      </ul>
    </nav>
  );
}