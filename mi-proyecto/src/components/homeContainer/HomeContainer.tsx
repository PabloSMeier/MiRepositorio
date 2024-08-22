"use client";
/* eslint-disable @next/next/no-img-element */
import SobreMi from "../sobreMi/SobreMi";
import Proyectos from "../proyectos/Proyectos";
import Habilidades from "../habilidades/Habilidades";

export const HomeContainer = () => {
  return (
    <div className="min-h-[90vh] flex flex-col space-y-4 space-x-0 sm:space-y-0 sm:space-x-4 sm:flex-row items-center sm:items-start justify-start sm:justify-center p-8">
      <SobreMi />
      <Habilidades />
      <Proyectos />
    </div>
  );
};
export default HomeContainer;
