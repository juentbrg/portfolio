import "./index.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo192.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const usePublicUrl = (file) => {
  return new URL(file, window.location.origin).toString();
};

const Navigation = () => {
  const [activePage, setActivePage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const pdfURL = usePublicUrl("/cv.pdf");

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActivePage("home");
    } else if (path === "/works") {
      setActivePage("works");
    } else if (path === "/laboratory") {
      setActivePage("laboratory");
    } else if (path === "/about") {
      setActivePage("about");
    } else {
      setActivePage("undefined");
    }
  }, [location]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="navigation">
      <Link className="navigation__logo-container" to="/">
        <img className="navigation__logo" src={logo} alt="logo julien" />
      </Link>
      <div
        className={`navigation__links ${
          isMenuOpen ? "navigation__links-visible" : ""
        }`}
      >
        <Link
          to="/"
          className={
            activePage === "home"
              ? "navigation__link-active"
              : "navigation__link"
          }
        >
          Accueil
        </Link>
        <Link
          to="/works"
          className={
            activePage === "works"
              ? "navigation__link-active"
              : "navigation__link"
          }
        >
          Projets
        </Link>
        <Link
          to="/laboratory"
          className={
            activePage === "laboratory"
              ? "navigation__link-active"
              : "navigation__link"
          }
        >
          Laboratoire
        </Link>
        <Link
          to="/about"
          className={
            activePage === "about"
              ? "navigation__link-active"
              : "navigation__link"
          }
        >
          À propos
        </Link>
        {windowWidth < 850 && (
          <a
            href={pdfURL}
            className="navigation__contact"
            rel="noreferrer"
            target="_blank"
          >
            Mon CV
          </a>
        )}
      </div>
      {windowWidth >= 850 && (
        <a
          href={pdfURL}
          className="navigation__contact"
          rel="noreferrer"
          target="_blank"
        >
          Mon CV
        </a>
      )}
      {windowWidth < 850 && (
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          size="2xl"
          style={{ color: "#f5f5f5" }}
          className="navigation__menu-icon"
          onClick={handleMenuToggle}
        />
      )}
    </nav>
  );
};

export default Navigation;
