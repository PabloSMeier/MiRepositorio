"use client";
/* eslint-disable @next/next/no-img-element */
import SobreMi from "../sobreMi/SobreMi";
import Habilidades from "../habilidades/Habilidades";
import ProyectContainer from "../proyects/ProyectContainer";
import Contacto from "../contacto/Contacto";

export const HomeContainer = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <SobreMi />
      <Habilidades />
      <ProyectContainer />
      <Contacto />
    </div>
  );
};
export default HomeContainer;
