import "./index.scss";
import Navigation from "../../components/Navigation";
import WorksCards from "../../components/WorksCards";
import projectList from "../../datas/projectList";
import Footer from "../../components/Footer";

const Works = () => {
  const delay = 0.2;
  return (
    <>
      <Navigation />
      <main className="works">
        <h1 className="works__title">
          Projets <span className="works__title-colored">OpenClassrooms</span>
        </h1>
        <section className="works__gallery">
          {projectList.openclassrooms.map(
            ({ id, cover, title, type }, index) => (
              <div key={id}>
                <WorksCards
                  id={id}
                  cover={cover}
                  title={title}
                  type={type}
                  animationDelay={`${index * delay}`}
                />
              </div>
            )
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Works;
