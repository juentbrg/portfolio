import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ name, job, picture, email, location, linkedin, github }) => {
  return (
    <div className="profile">
      <div className="profile__details">
        <h2 className="profile__name">{name}</h2>
        <p className="profile__job">{job}</p>
      </div>
      <div className="profile__picture-container">
        <img className="profile__picture" src={picture} alt={name}></img>
      </div>
      <div className="profile__info">
        <a className="profile__email" href={`mailto:${email}`}>
          {email}
        </a>
        <div className="profile__location-container">
          <FontAwesomeIcon
            icon={faLocationDot}
            size="xl"
            style={{ color: "#982649" }}
          />
          <p className="profile__location">{location}</p>
        </div>
      </div>
      <div className="profile__links">
        <a
          className="profile__linkedin"
          href={linkedin}
          title="Linkedin"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="xl"
            style={{ color: "#0077b5" }}
          />
        </a>
        <a
          className="profile__github"
          href={github}
          title="Github"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            style={{ color: "#f0f6fc" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Profile;
