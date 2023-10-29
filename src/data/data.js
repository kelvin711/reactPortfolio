import goalSiteImage from '../assets/images/goalSite.png';
import listAPIImage from '../assets/images/listAPI.png';
import findThatPokemonImage from '../assets/images/findThatPokemon.png';

export const projects = [
    {
        title: "Goal Tracker",
        subtitle: "Track your goals",
        description:
            "Fullstack MERN application utilizing authentication, also leveraging Redux for state management.",
        image: goalSiteImage,
        link: "https://goalappkelvin.herokuapp.com/register",
        source: "https://github.com/kelvin711/Goals"

    },
    {
        title: "Api List",
        subtitle: "List of API's available to use",
        description:
            "React app that makes a call to https://api.publicapis.org/ to deliver content. Styling is done with TailwindCSS.",
        image: listAPIImage,
        link: "https://api-list-kelvin.herokuapp.com/",
        source: "https://github.com/kelvin711/api-list"

    },
    {
        title: "Pokemon Finder",
        subtitle: "Pokemon finder application calling on the pokemon AP",
        description:
            "React app that makes a call to the pokemon API https://pokeapi.co/ to deliver content. Redux is used for state management. There is pagination and chartJS was used for a better user experience.",
        image: findThatPokemonImage,
        link: "https://find-that-pokemon.netlify.app/",
        source: "https://github.com/kelvin711/pokemon_app"

    },

];

export const skills = [
    "JavaScript",
    "Python",
    "Java",
    "HTML",
    "Django",
    "React",
    "Flask",
    "Spring",
    "MySQL",
    "MongoDB",
    "Git",
    "Github",
    "Tailwind CSS",
    "Boot-Strap",
];
