import "./index.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <div className="container stars">
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-1"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
        <div className="stars__star-2"></div>
      </div>
      <div className="container moon">
        <div className="moon__container-title">
          <div className="moon__title">
            <div className="moon__number">4</div>
            <div className="moon__moon">
              <div className="moon__face">
                <div className="moon__mouth"></div>
                <div className="moon__eyes">
                  <div className="moon__eye-left"></div>
                  <div className="moon__eye-right"></div>
                </div>
              </div>
            </div>
            <div className="moon__number">4</div>
          </div>
          <div className="moon__subtitle">
            Oups. La page demandée est introuvable.
          </div>
          <button className="moon__button">
            <Link className="moon__link" to={"/"}>
              Accueil
            </Link>
          </button>
          <div className="moon__credential-container">
            <p className="moon__credential">
              crédit:{" "}
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fp%2FCtB6n6Gtes8%2F%3Figshid%3DMzRlODBiNWFlZA%253D%253D%26fbclid%3DIwAR20pVblxXX61dyQU7oPl5fC2Xc5E0-WzdSzhtOQbn40mCd4Re9ym7MeLek&h=AT281LkXyOKnEY3vrLi7pQvqQqQPMtW1dPWIVUAm5du_qiHvZsuKoFn4QfbkGcqLPrXWybT3bm-O0HP9pN4TVLc36h-RDFTa3-VKHDD_Jf-zVZpx-luS9JN8xGVIDQ"
                target="_blank"
                rel="noreferrer"
              >
                Nothing4us
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;
