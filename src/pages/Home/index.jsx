import "./index.scss";
import Profile from "../../components/Profile";
import picture from "../../assets/pic.webp";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <main className="home">
        <Profile
          name="Julien"
          job="Développeur front-end"
          picture={picture}
          email="julient.bourgeois@gmail.com"
          location="Nîmes, France"
          linkedin="https://www.linkedin.com/in/julien-bourgeois-710658262/"
          github="https://github.com/juentbrg"
        />
        <div className="presentation">
          <h1 className="presentation__title">
            Salut! Je suis Julien,{" "}
            <span className="presentation__title-colored">
              Développeur Front-End
            </span>
          </h1>
          <p className="presentation__paragraph">
            Fasciné par le potentiel de l'informatique, j'aime collaborer avec
            des esprits créatifs pour façonner des interfaces intuitives. Si
            vous recherchez un développeur Front-End passionné et motivé, prêt à
            relever de nouveaux défis, je suis là pour vous aider à donner vie à
            vos idées.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
