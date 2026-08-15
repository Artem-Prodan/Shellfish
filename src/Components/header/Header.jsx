import { useEffect, useRef, useState } from "react";
import "./Header.css";
import logo from "../../assets/icons/logo1.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }
  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <header className="header" ref={menuRef}>
      <div className="container header__inner">

        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Shellfish" />
        </Link>

        <nav className="nav">

          <button
            type="button"
            className={`nav__hamburger ${isMenuOpen ? "is-open" : ""}`}
            onClick={toggleMenu}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            H
          </button>
        </nav>

        {isMenuOpen && (
          <div className="header__menu">
            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#menu" onClick={closeMenu}>
              Menu
            </a>

            <a href="#specials" onClick={closeMenu}>
              Specials
            </a>

            <a href="#reservation" onClick={closeMenu}>
              Reservation
            </a>
          </div>
        )}

      </div>
    </header>
  );
}