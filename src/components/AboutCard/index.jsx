import "./index.scss";

const AboutCard = ({
  picture,
  fullName,
  description,
  followingDescription,
  degreeDate,
  degreeName,
  degreeSchool,
}) => {
  return (
    <section className="aboutCard">
      <div className="aboutCard__wrapper">
        <div className="aboutCard__picture-border">
          <div className="aboutCard__picture-container">
            <img className="aboutCard__picture" src={picture} alt={fullName} />
          </div>
        </div>
        <div className="aboutCard__content">
          <h1 className="aboutCard__title">À propos</h1>
          <div className="aboutCard__info">
            <h2 className="aboutCard__fullName">{fullName}</h2>
            <p className="aboutCard__description">{description}</p>
          </div>
        </div>
      </div>
      <div className="aboutCard__more">
        <div className="aboutCard__following">
          <h3 className="aboutCard__following-title">La suite</h3>
          <p className="aboutCard__following-description">
            {followingDescription}
          </p>
        </div>
        <div className="aboutCard__degree">
          <h3 className="aboutCard__degree-title">Diplôme</h3>
          <div className="aboutCard__degree-info">
            <p className="aboutCard__degree-date">{degreeDate}</p>
            <h4 className="aboutCard__degree-name">{degreeName}</h4>
            <p className="aboutCard__degree-school">{degreeSchool}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
