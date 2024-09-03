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
];
