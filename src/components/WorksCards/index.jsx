import "./index.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const WorksCards = ({ id, cover, title, type, animationDelay }) => {
  const location = useLocation();
  const isLabPage = location.pathname.includes("/laboratory");
  const cardRef = useRef(null);
  useEffect(() => {
    cardRef.current.classList.add("animated");
  }, []);
  return (
    <Link
      to={`/projects/${id}?isLabPage=${isLabPage}`}
      ref={cardRef}
      className="workscards"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="workscards__cover-container">
        <img className="workscards__cover" src={cover} alt={title} />
      </div>
      <div className="workscards__wraper">
        <div className="workscards__title-type">
          <p className="workscards__type">Projet {type}</p>
          <h3 className="workscards__title">{title}</h3>
        </div>
        <FontAwesomeIcon
          className="workscards__arrow"
          icon={faArrowRight}
          size="2xl"
        />
      </div>
    </Link>
  );
};

export default WorksCards;
