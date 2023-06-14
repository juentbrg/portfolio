import "./index.scss";
import WorksCards from "../../components/WorksCards";
import projectList from "../../datas/projectList";
import Footer from "../../components/Footer";

const Lab = () => {
  return (
    <>
      <main className="lab">
        <h1 className="lab__title">Projets personnels</h1>
        <section className="lab__gallery">
          {projectList.laboratory.map(({ id, cover, title, type }) => (
            <div key={id}>
              <WorksCards id={id} cover={cover} title={title} type={type} />
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Lab;
