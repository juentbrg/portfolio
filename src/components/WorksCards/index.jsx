import "./index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const WorksCards = ({ id, cover, title, type }) => {
  return (
    <Link to={"/"} className="workscards">
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
