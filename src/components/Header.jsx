import { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <a href="#">
            <img src="/img/logo.png" alt="logo" width="130" />
          </a>

          <NavbarLinks isOpen={isOpen} setIsOpen={setIsOpen} />

          <NavbarBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </header>
  );
};

const NavbarLinks = ({ isOpen, setIsOpen }) => {
  const links = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
    { href: "#menu", text: "Our Menu" },
    { href: "#testimonials", text: "Testimonials" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className={`navbar-nav ${isOpen ? "active" : ""}`}>
      {links.map((link) => (
        <li>
          <a href={link.href} className="nav-link" onClick={toggleMenu}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

const NavbarBtn = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`menu-toggle-btn ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <span className="line one"></span>
      <span className="line two"></span>
      <span className="line three"></span>
    </button>
  );
};
