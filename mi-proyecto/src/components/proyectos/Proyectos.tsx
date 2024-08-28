/* eslint-disable @next/next/no-img-element */
"use client";
import { IProyect, proyects } from "@/helpers/proyects/proyects.helper";
import { motion } from "framer-motion";

const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="min-h-[100vh] w-[100vw] py-[10vh] flex flex-col space-y-10 items-center lg:hidden lg:absolute"
    >
      <h1 className="text-3xl font-bold">Proyectos</h1>
      <div className="max-w-md md:hidden md:absolute">
        {proyects.map((proyect: IProyect) => {
          return (
            <div key={proyect.id} className="">
              <img className="w-14" src={proyect.logo} alt="" />
              <h1 className="">{proyect.name}</h1>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Proyectos;
