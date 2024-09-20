export interface IProyect {
  id: number;
  name: string;
  logo?: string;
  img?: string;
  technologies?: string[];
  description?: string;
  repo?: string;
  deployment?: string;
}

export const proyects: IProyect[] = [
  {
    id: 1,
    name: "Reserva Gol",
    logo: "/reservagol.jpg",
    img: "/reservagol2.png",
    technologies: ["React", "TypeScript", "Tailwind", "NextJS"],
    description:
      "Página web para facilitar la reserva de turnos de canchas deportivas.",
    repo: "https://github.com/PabloSMeier/Proyecto-Final-Front",
    deployment: "",
  },
  {
    id: 2,
    name: "E-Commerce",
    logo: "/HS.png",
    img: "/ecommerce.png",
    technologies: ["React", "TypeScript", "Tailwind", "LocalStorage"],
    description: "E-Commerce de tienda de apple.",
    repo: "https://github.com/PabloSMeier/M4-ecommerce",
    deployment: "",
  },
  {
    id: 3,
    name: "Henry Cinema",
    logo: "/cinemaLogo.png",
    img: "/cinema.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "Página web de búsqueda de películas.",
    repo: "",
    deployment: "",
  },
  {
    id: 4,
    name: "Portfolio",
    logo: "/LogoO.png",
    img: "/portfolio.png",
    technologies: ["React", "NextJS", "TypeScript", "Tailwind"],
    description: "Portfolio personal.",
    repo: "https://github.com/PabloSMeier/MiRepositorio",
    deployment: "https://portfolio-pablo-meier.vercel.app/",
  },
];
export const proyectsE: IProyect[] = [
  {
    id: 1,
    name: "Reserva Gol",
    logo: "/reservagol.jpg",
    img: "/reservagol2.png",
    technologies: ["React", "TypeScript", "Tailwind", "NextJS"],
    description:
      "Web page to facilitate the booking of appointments for sport courts.",
    repo: "https://github.com/PabloSMeier/Proyecto-Final-Front",
    deployment: "",
  },
  {
    id: 2,
    name: "E-Commerce",
    logo: "/HS.png",
    img: "/ecommerce.png",
    technologies: ["React", "TypeScript", "Tailwind", "LocalStorage"],
    description: "Apple store e-Commerce.",
    repo: "https://github.com/PabloSMeier/M4-ecommerce",
    deployment: "",
  },
  {
    id: 3,
    name: "Henry Cinema",
    logo: "/cinemaLogo.png",
    img: "/cinema.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "Web page for movie searching.",
    repo: "",
    deployment: "",
  },
  {
    id: 4,
    name: "Portfolio",
    logo: "/LogoO.png",
    img: "/portfolio.png",
    technologies: ["React", "NextJS", "TypeScript", "Tailwind"],
    description: "Personal portfolio.",
    repo: "https://github.com/PabloSMeier/MiRepositorio",
    deployment: "https://portfolio-pablo-meier.vercel.app/",
  },
];
