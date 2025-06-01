import "../styles/header.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

<meta name="viewport" content="width=device-width, initial-scale=1.0" />;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const menuBurger = document.querySelector(".burger-button");
    const navLinks = document.querySelector(".burger-menu");
    const burgerHeader = document.querySelector(".header");

    const handleMenuToggle = () => {
      navLinks.classList.toggle("mobile-menu");
      burgerHeader.classList.toggle("mobile-menu");
    };

    menuBurger.addEventListener("click", handleMenuToggle);

    return () => {
      menuBurger.removeEventListener("click", handleMenuToggle);
    };
  }, []);
  return (
    <section class="header">
      <h1>JOHN DOE</h1>

      <button className="burger-button" onClick={toggleMenu}>
        ☰
      </button>

      <nav className="liens">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mentions"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Mentions légales
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="burger-menu">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <a href="./assets/contact.html">CONTACT</a>
          </li>
          <li>
            <a href="./assets/mention.html">MENTIONS LÉGALES</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
