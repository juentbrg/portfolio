import "./index.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo192.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const usePublicUrl = (file) => {
  return new URL(file, window.location.origin).toString();
};

const Navigation = () => {
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
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const getLinkClassName = (page) => {
    const isActive = activePage === page;
    return isActive ? "navigation__link-active" : "navigation__link";
  };

  let activePage;
  if (location.pathname === "/") {
    activePage = "home";
  } else if (location.pathname === "/works") {
    activePage = "works";
  } else if (location.pathname === "/laboratory") {
    activePage = "laboratory";
  } else if (location.pathname === "/about") {
    activePage = "about";
  } else {
    activePage = "undefined";
  }

  return (
    <nav className="navigation">
      <Link
        className="navigation__logo-container"
        to="/"
        aria-label="Retourner à la page d'accueil"
      >
        <Logo className="navigation__logo" />
      </Link>
      <div
        className={`navigation__links ${
          isMenuOpen ? "navigation__links-visible" : ""
        }`}
      >
        {windowWidth < 850 && (
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            className="navigation__menu-Xcross"
            onClick={handleMenuToggle}
          />
        )}
        <Link to="/" className={getLinkClassName("home")}>
          Accueil
        </Link>
        <Link to="/works" className={getLinkClassName("works")}>
          Projets
        </Link>
        <Link to="/laboratory" className={getLinkClassName("laboratory")}>
          Laboratoire
        </Link>
        <Link to="/about" className={getLinkClassName("about")}>
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
          icon={faBars}
          size="2xl"
          className="navigation__menu-bars"
          onClick={handleMenuToggle}
        />
      )}
    </nav>
  );
};

export default Navigation;
