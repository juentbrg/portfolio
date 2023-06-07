import "./index.scss";
import logo from "../../assets/logo192.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img className="footer__logo" src={logo} alt="logo" />
      </div>
      <div className="footer__links">
        <Link className="footer__link" to={"/"}>
          Accueil
        </Link>
        <Link className="footer__link" to={"/works"}>
          Projets
        </Link>
        <Link className="footer__link" to={"/laboratory"}>
          Laboratoire
        </Link>
        <Link className="footer__link" to={"/about"}>
          À propos
        </Link>
      </div>
      <p className="footer__right">© Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
