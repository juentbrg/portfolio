import "./index.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo192.webp";

const usePublicUrl = (file) => {
  return new URL(file, window.location.origin).toString();
};

const Navigation = () => {
  const [activePage, setActivePage] = useState("home");
  const location = useLocation();
  const pdfURL = usePublicUrl("/cv.pdf");

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

  return (
    <nav className="navigation">
      <Link className="navigation__logo-container" to="/">
        <img className="navigation__logo" src={logo} alt="logo julien" />
      </Link>
      <div className="navigation__links">
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
      </div>
      <a
        href={pdfURL}
        className="navigation__contact"
        rel="noreferrer"
        target="_blank"
      >
        Mon CV
      </a>
    </nav>
  );
};

export default Navigation;
