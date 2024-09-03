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
    technologies: ["React", "TypeScript", "Tailwind", "NextJS", "LocalStorage"],
    description:
      "Página web para facilitar la reserva de turnos de canchas deportivas.",
    repo: "",
    deployment: "",
  },
  {
    id: 2,
    name: "E-Commerce",
    logo: "/HS.png",
    img: "/ecommerce.png",
    technologies: ["React", "TypeScript", "Tailwind", "NextJS", "LocalStorage"],
    description: "E-Commerce de tienda de apple.",
    repo: "",
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
];
