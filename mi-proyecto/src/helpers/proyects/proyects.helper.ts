export interface IProyect {
  id: number;
  name: string;
  logo?: string;
  img?: string;
  tecnologies?: string[];
  description?: string;
  repo?: string;
  deployment?: string;
}

export const proyects: IProyect[] = [
  {
    id: 1,
    name: "Reserva Gol",
    logo: "/reservagol.png",
    img: "",
    tecnologies: ["", "", "", ""],
    description:
      "Página web para facilitar la reserva de turnos de canchas deportivas.",
    repo: "",
    deployment: "",
  },
];
