import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo192.webp";

const usePublicUrl = (file) => {
  return new URL(file, window.location.origin).toString();
};

const Navigation = () => {
  const [activePage, setActivePage] = useState("home");
  const pdfURL = usePublicUrl("/cv.pdf");
  const handleLinkClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="navigation">
      <Link className="navigation__logo-container" to={"/"}>
        <img className="navigation__logo" src={logo} alt="logo julien" />
      </Link>
      <div className="navigation__links">
        <Link
          to={"/"}
          className={
            activePage === "home"
              ? "navigation__link-active"
              : "navigation__link"
          }
          onClick={() => handleLinkClick("home")}
        >
          Accueil
        </Link>
        <Link
          to={"/works"}
          className={
            activePage === "works"
              ? "navigation__link-active"
              : "navigation__link"
          }
          onClick={() => handleLinkClick("works")}
        >
          Projets
        </Link>
        <Link
          to={"/laboratory"}
          className={
            activePage === "laboratory"
              ? "navigation__link-active"
              : "navigation__link"
          }
          onClick={() => handleLinkClick("laboratory")}
        >
          Laboratoire
        </Link>
        <Link
          to={"/about"}
          className={
            activePage === "about"
              ? "navigation__link-active"
              : "navigation__link"
          }
          onClick={() => handleLinkClick("about")}
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
