import "./index.scss";
import Navigation from "../../components/Navigation";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import projectList from "../../datas/projectList";
import Footer from "../../components/Footer";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  let projectId = useParams().id;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isLabPage = searchParams.get("isLabPage") === "true";

  let projectsList = null;
  if (isLabPage) {
    projectsList = projectList.laboratory;
  } else {
    projectsList = projectList.openclassrooms;
  }

  const projects = projectsList.find(({ id }) => id === projectId);

  useEffect(() => {
    if (!projects) {
      navigate("/error");
    }
  }, [projects, navigate]);

  return (
    <>
      <Navigation />
      <main className="projects">
        <div className="projects__image-container">
          <img
            className="projects__image"
            src={projects.cover}
            alt={projects.title}
          />
        </div>
        <div className="projects__content">
          <div className="projects__nav">
            <Link className="projects__arrow-link" to={"/works"}>
              <FontAwesomeIcon
                className="projects__arrow"
                icon={faArrowLeft}
                size="2xl"
              />
            </Link>
            <h1 className="projects__title">{projects.title}</h1>
          </div>
          <div className="projects__content-wrapper">
            <div className="projects__tech projects__container">
              <h2 className="projects__tech-title">Tech</h2>
              <div className="projects__techImage-wrapper">
                {projects.technologies.map((technology, index) => (
                  <div key={index} className="projects__techImage-container">
                    <img
                      className="projects__techImage"
                      src={technology}
                      alt={`Technology ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="projects__description projects__container">
              <h2 className="projects__description-title">À propos</h2>
              <p className="projects__description">{projects.description}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
