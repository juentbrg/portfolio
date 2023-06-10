import "./index.scss";
import WorksCards from "../../components/WorksCards";
import projectList from "../../datas/projectList";

const Works = () => {
  return (
    <>
      <main className="works">
        <h1 className="works__title">Projets OpenClassrooms</h1>
        <section className="works__gallery">
          {projectList.openclassrooms.map(({ id, cover, title, type }) => (
            <div key={id}>
              <WorksCards id={id} cover={cover} title={title} type={type} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Works;
