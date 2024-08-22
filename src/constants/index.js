import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",

    iconBg: "#383E56",

    points: ["React-Router", "Redux toolkit", "Hooks ", "JSX"],
  },
  {
    title: "UI/UX Designer",

    iconBg: "#383E56",

    points: ["Tailwind CSS", "Figma", "Three.js "],
  },
  {
    title: "Programming & Development",

    iconBg: "#383E56",

    points: ["HTML/CSS", "Javascript", "Python", "React.js"],
  },
  {
    title: "Creator",

    iconBg: "#383E56",

    points: ["Adobe Photoshop", "Video Editing", "Music Editor"],
  },
];

const projects = [
  {
    name: "Microsoft UI Clone",
    description:
      "Responsive UI clone of Microsoft official website using Tailwindcss and Javascript. I will make this webpage working through the new tech. i will learn in future. ",
    tags: [
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Vishakh18/Microsoft-UI-Clone",
  },
  {
    name: "News App",
    description:
      "Web application that enables users to search for latest news and events across different regions. They can also checkout different categories of news as well. ",
    tags: [
      {
        name: "Javascript/React",
        color: "blue-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Vishakh18/News-Corner",
  },
  {
    name: "TIC-TAC-TOE(AI Based)",
    description:
      "A TIC TAC TOE game powered with AI and multiple game modes. You can also choose difficulty level of your choice.So, why not ...? give it a try!",
    tags: [
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Vishakh18/Tic-Tac-Toe-Python-AI-",
  },
];

export { services, technologies, experiences, projects };
