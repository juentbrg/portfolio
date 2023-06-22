import "./index.scss";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import AboutCard from "../../components/AboutCard";
import pic from "../../assets/pic.webp";

const About = () => {
  return (
    <>
      <Navigation />
      <main className="about">
        <AboutCard
          picture={pic}
          fullName="Julien Bourgeois"
          description="Je suis un développeur web front-end basé à Toulouse, j’ai de bonnes connaissances en React Js. J’ai suivi la formation intégrateur web chez OpenClassrooms qui m’a mis dans des conditions voulues proche du développement en entreprise."
          followingDescription="Pour la suite, j'aimerai continuer à apprendre. Me renforcer en tant que développeur front-end, aborder le back-end que ce soit en entreprise ou en auto-didacte."
          degreeDate="2022 - 2023"
          degreeName="Intégrateur Web"
          degreeSchool="OpenClassrooms"
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
