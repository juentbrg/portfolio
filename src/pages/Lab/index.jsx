import "./index.scss";
import Navigation from "../../components/Navigation";
import WorksCards from "../../components/WorksCards";
import projectList from "../../datas/projectList";
import Footer from "../../components/Footer";

const Lab = () => {
  const delay = 0.15;
  return (
    <>
      <Navigation />
      <main className="lab">
        <h1 className="lab__title">
          Projets <span className="lab__title-colored">personnels</span>
        </h1>
        <section className="lab__gallery">
          {projectList.laboratory.map(({ id, cover, title, type }, index) => (
            <div key={id}>
              <WorksCards
                id={id}
                cover={cover}
                title={title}
                type={type}
                animationDelay={`${index * delay}`}
              />
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Lab;
