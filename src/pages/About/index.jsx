import "./index.scss";
import Footer from "../../components/Footer";
import AboutCard from "../../components/AboutCard";
import pic from "../../assets/pic.webp";

const About = () => {
  return (
    <>
      <main className="about">
        <AboutCard
          picture={pic}
          fullName="Julien Bourgeois"
          description="Depuis 10 ans, je suis passionné d'informatique et je me suis récemment tourné vers le développement web. J'ai repris mes études dans ce domaine et j'ai approfondi mes connaissances, notamment en React. J'ai également exploré d'autres langages de programmation tels que VueJS, Django et Python en autodidacte. Cette combinaison d'apprentissage académique et autodidactisme m'a permis d'avoir une approche polyvalente du développement web. Aujourd'hui, je souhaite mettre mes compétences et ma passion au service de ma carrière."
          followingDescription="Pour la suite, j'aimerai continuer à apprendre. Me renforcer en tant que dev front-end, aborder le back-end que ce soit en entreprise ou en auto-didacte."
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
