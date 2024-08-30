"use client";
/* eslint-disable @next/next/no-img-element */
import SobreMi from "../sobreMi/SobreMi";
import Habilidades from "../habilidades/Habilidades";
import ProyectContainer from "../proyects/ProyectContainer";

export const HomeContainer = () => {
  return (
    <div className="min-h-[90vh] flex flex-col space-y-4 space-x-0  items-center justify-start p-8">
      <SobreMi />
      <Habilidades />
      <ProyectContainer />
    </div>
  );
};
export default HomeContainer;
