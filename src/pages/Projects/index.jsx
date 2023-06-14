import "./index.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import projectList from "../../datas/projectList";
import Footer from "../../components/Footer";

const Projects = () => {
  let projectId = useParams().id;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isLabPage = searchParams.get("isLabPage") === "true";
  console.log(searchParams);

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
      <main className="projects">
        <div className="projects__image-container">
          <img
            className="projects__image"
            src={projects.cover}
            alt={projects.title}
          />
        </div>
        <div className="projects__content">
          <h1 className="projects__title">{projects.title}</h1>
          <div className="projects__content-wrapper">
            <div className="projects__tech projects__container">
              <h2 className="projects__tech-title">Technologies</h2>
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
              <p>{projects.description}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
