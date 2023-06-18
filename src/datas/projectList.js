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
        "Ce projet représente mon premier défi en tant que développeur web. Les consignes étaient claires : intégrer une maquette en utilisant uniquement HTML et CSS, sans l'aide de préprocesseurs, bibliothèques ou JavaScript. J'ai utilisé des techniques de positionnement CSS avancées, telles que Flexbox et Grid, pour structurer la maquette de manière efficace. Malgré l'absence de fonctionnalités interactives, j'ai créé une expérience utilisateur esthétiquement plaisante et responsive.",
      cover: booki,
      githubLink: "https://github.com/juentbrg/Booki",
      type: "HTML/CSS",
      technologies: [html, css],
    },
    {
      id: (id++).toString(),
      title: "Ohmyfood",
      description:
        "Ce projet m'a permis de consolider mes connaissances en HTML et SCSS en me concentrant sur une approche mobile-first. J'ai intégré des animations CSS pour ajouter une dimension visuelle et interactive à l'interface. Cela m'a offert une expérience précieuse dans la conception responsive et les techniques d'animation CSS. Ce projet a renforcé ma maîtrise du développement web et m'a préparé pour des projets plus avancés.",
      cover: ohmyfood,
      githubLink: "https://github.com/juentbrg/Ohmyfood",
      type: "HTML/CSS",
      technologies: [html, scss],
    },
    {
      id: (id++).toString(),
      title: "Print it",
      description:
        "Mon premier projet en JavaScript vanilla consistait à créer un carrousel en utilisant le HTML et le CSS déjà fournis. J'ai réussi à mettre en place la logique nécessaire pour permettre une navigation fluide entre les éléments du carrousel. Ce projet m'a donné une première expérience pratique en JavaScript et renforcé ma compréhension des concepts fondamentaux.",
      cover: printit,
      githubLink: "https://github.com/juentbrg/PrintIt",
      type: "JavaScript",
      technologies: [html, css, js],
    },
    {
      id: (id++).toString(),
      title: "Portfolio Architecte",
      description:
        "Mon premier projet sérieux en JavaScript vanilla m'a permis d'apprendre la gestion des appels AJAX. J'ai effectué des modifications sur le HTML et le CSS fournis pour répondre aux exigences du projet. Ce projet m'a offert une expérience précieuse dans la manipulation dynamique des données et m'a permis de renforcer mes compétences en développement web.",
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
        "Ce projet m'a permis d'acquérir une compréhension approfondie des concepts fondamentaux de React tels que les composants, les états et les props. J'ai mis en place la structure du projet en suivant les principes de modularité et de réutilisabilité propres à React.",
      cover: kasa,
      githubLink: "https://github.com/juentbrg/kasa",
      type: "React",
      technologies: [react],
    },
    {
      id: (id++).toString(),
      title: "Nina Carducci",
      description:
        "Ce projet m'a permis de travailler sur l'optimisation SEO en corrigeant certains éléments du code pour obtenir un rapport Lighthouse satisfaisant. J'ai ensuite concentré mes efforts sur le référencement local, en utilisant des techniques spécifiques pour augmenter la visibilité du site dans les recherches locales.",
      cover: ninaCarducci,
      githubLink: "https://github.com/juentbrg/ninacarducci",
      type: "SEO",
      technologies: [html, css],
    },
    {
      id: (id++).toString(),
      title: "724 events",
      description:
        "Dans ce projet, j'ai identifié et corrigé les bugs d'intégration présents dans un code React. J'ai mis en place une stratégie méthodique pour résoudre efficacement ces problèmes, renforçant ainsi mes compétences en débogage et en intégration React.",
      cover: event,
      githubLink: "https://github.com/juentbrg/724events",
      type: "Debug",
      technologies: [react],
    },
    {
      id: (id++).toString(),
      title: "Argent Bank",
      description:
        " Argent Bank représente le projet le plus complet de ma formation. Initialement développé avec React et Redux, j'ai saisi l'opportunité d'ajouter TypeScript, une technologie que je souhaitais aborder depuis longtemps. Cette combinaison de technologies m'a permis de créer une application robuste et maintenable, renforçant mes compétences dans le développement web moderne.",
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
        "Ce projet personnel m'a permis de comprendre les bases de Vue.js 3. En explorant cette technologie, j'ai consolidé mes connaissances et acquis une compréhension solide de son fonctionnement. Ce projet représente une étape importante dans mon apprentissage de Vue.js 3.",
      cover: todoListVue,
      githubLink: "https://github.com/juentbrg/todolist.vueJS3",
      type: "VueJS",
      technologies: [vueJs],
    },
  ],
};

export default projectList;
