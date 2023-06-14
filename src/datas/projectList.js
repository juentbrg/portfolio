import html from "../assets/html.webp";
import css from "../assets/css.webp";
import scss from "../assets/sass.webp";
import js from "../assets/js.webp";
import ts from "../assets/typescript.webp";
import react from "../assets/react.webp";
import reactRedux from "../assets/react-redux.webp";
import vueJs from "../assets/vue.webp";
import booki from "../assets/mockup/booki.jpg";
import ohmyfood from "../assets/mockup/Ohmyfood.jpg";
import printit from "../assets/mockup/printit.jpg";
import portfolioArchitecte from "../assets/mockup/portfolio-architecte.jpg";
import kasa from "../assets/mockup/kasa.jpg";
import ninaCarducci from "../assets/mockup/ninacarducci.jpg";
import event from "../assets/mockup/724.jpg";
import argentBank from "../assets/mockup/argentbank.jpg";
import todoListVue from "../assets/mockup/todolistVue.jpg";

let id = 0;

const projectList = {
  openclassrooms: [
    {
      id: (id++).toString(),
      title: "Booki",
      description:
        "Le premier vrai projet de ma formation. Les consignes: intégrer une maquette uniquement en HTML et CSS. Pas de préprocesseur, pas de bibliothèques, pas de JavaScript.",
      cover: booki,
      githubLink: "https://github.com/juentbrg/Booki",
      type: "HTML/CSS",
      technologies: [html, css],
    },
    {
      id: (id++).toString(),
      title: "Ohmyfood",
      description:
        "Une occasion de consolider ses connaissances en HTML et SCSS uniquement, SCSS étant aux choix. Un projet avec comme contrainte l'obligation de le développer en mobile-first, et en y intégrant des animations css.",
      cover: ohmyfood,
      githubLink: "https://github.com/juentbrg/Ohmyfood",
      type: "HTML/CSS",
      technologies: [html, scss],
    },
    {
      id: (id++).toString(),
      title: "Print it",
      description:
        "Mon premier projet en JavaScript vanilla assez simpliste. Le html et le css est déjà fourni.",
      cover: printit,
      githubLink: "https://github.com/juentbrg/PrintIt",
      type: "JavaScript",
      technologies: [html, css, js],
    },
    {
      id: (id++).toString(),
      title: "Portfolio Architecte",
      description:
        "Premier projet sérieux en JavaScript vanilla. J'y ai appris la gestion des appels ajax. Le backend, le html et le css sont fournis, des modifications sont tout de même attendues sur html et css.",
      cover: portfolioArchitecte,
      githubLink:
        "https://github.com/juentbrg/Portfolio-architecte-sophie-bluel",
      type: "JavaScript",
      technologies: [html, css, js],
    },
    {
      id: (id++).toString(),
      title: "Kasa",
      description:
        "Mes premiers pas sur la bibliothèque React. Ce projet m'a permis de comprendre l'architecture et la logique React, une maquette m'a été donnée pour ce projet.",
      cover: kasa,
      githubLink: "https://github.com/juentbrg/kasa",
      type: "React",
      technologies: [react],
    },
    {
      id: (id++).toString(),
      title: "Nina Carducci",
      description:
        "Un projet pour travailler le référencement, un code m'est fourni, je dois dans un premier temps corriger quelques éléments pour obtenir un rapport correct sur lighthouse, puis, je travaille le référencement local.",
      cover: ninaCarducci,
      githubLink: "https://github.com/juentbrg/ninacarducci",
      type: "SEO",
      technologies: [html, css],
    },
    {
      id: (id++).toString(),
      title: "724 events",
      description:
        "On me donne un code React contenant des bugs d'intégration. J'ai du les trouver et les corriger en mettant en place une stratégie.",
      cover: event,
      githubLink: "https://github.com/juentbrg/724events",
      type: "Debug",
      technologies: [react],
    },
    {
      id: (id++).toString(),
      title: "Argent Bank",
      description:
        "Argent bank est le projet le plus complet de ma formation, a mon sens. Initialement, il doit être codé avec react et redux, j'y ai ajouté typescript que je souhaitais aborder depuis longtemps.",
      cover: argentBank,
      githubLink: "https://github.com/juentbrg/ArgentBank-website",
      type: "React/Redux",
      technologies: [scss, ts, react, reactRedux],
    },
  ],
  laboratory: [
    {
      id: (id++).toString(),
      title: "To-do list Vue",
      description:
        "Un de mes nombreux projets personnel pour comprendre les bases de VueJS 3.",
      cover: todoListVue,
      githubLink: "https://github.com/juentbrg/todolist.vueJS3",
      type: "VueJS",
      technologies: [vueJs],
    },
  ],
};

export default projectList;
