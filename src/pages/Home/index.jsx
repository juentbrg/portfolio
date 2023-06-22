import "./index.scss";
import Navigation from "../../components/Navigation";
import Profile from "../../components/Profile";
import picture from "../../assets/pic.webp";
import Footer from "../../components/Footer";
import reactLogo from "../../assets/react.webp";
import vueLogo from "../../assets/vue.webp";
import jsLogo from "../../assets/js.webp";
import sassLogo from "../../assets/sass.webp";

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="home">
        <Profile
          name="Julien"
          job="Développeur front-end"
          picture={picture}
          email="julient.bourgeois@gmail.com"
          phone={782126618}
          location="Toulouse, France"
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
          <div className="presentation__skills">
            <h2 className="presentation__skills-title">Stack Technique</h2>
            <div className="presentation__techstack">
              <div className="presentation__techlogo-container">
                <img
                  className="presentation__techlogo"
                  src={jsLogo}
                  alt="JavaScript logo"
                />
              </div>
              <div className="presentation__techlogo-container">
                <img
                  className="presentation__techlogo"
                  src={sassLogo}
                  alt="Sass logo"
                />
              </div>
              <div className="presentation__techlogo-container">
                <img
                  className="presentation__techlogo"
                  src={reactLogo}
                  alt="ReactJS logo"
                />
              </div>
              <div className="presentation__techlogo-container">
                <img
                  className="presentation__techlogo"
                  src={vueLogo}
                  alt="VueJS logo"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
