/* eslint-disable @next/next/no-img-element */
"use client";
import { IProyect, proyects } from "@/helpers/proyects/proyects.helper";
import { motion } from "framer-motion";

const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="min-h-[100vh] w-[100vw] py-[10vh] flex flex-col space-y-10 items-center "
    >
      <h1 className="text-3xl font-bold">Proyectos</h1>
      <div className="w-screen p-6 grid md:grid-cols-2 gap-6">
        {proyects.map((proyect: IProyect) => {
          return (
            <div
              key={proyect.id}
              className="flex flex-col w-full h-[35vh] bg-white rounded-md group"
            >
              <div className="flex flex-row w-full h-12 items-center font-bold text-xl">
                <img className="h-10 rounded-md" src={proyect.logo} alt="" />
                <h1 className="">{proyect.name}</h1>
              </div>
              <div className="w-full overflow-hidden relative flex items-center justify-center">
                <img
                  className="w-full h-full object-cover object-center transition duration-400 ease-in-out transform group-hover:brightness-90 group-hover:blur-md"
                  src={proyect.img}
                  alt=""
                />
                <div className="absolute w-full h-full inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  {proyect.description}
                </div>
              </div>
              <div className="w-full h-12 p-2 flex flex-row space-x-2 items-center justify-start">
                {proyect.technologies?.map((technology: string) => {
                  return (
                    <div
                      key={technology}
                      className={`text-white py-1 px-2 text-xs rounded-md font-semibold ${
                        technology === "React"
                          ? "bg-cyan-300"
                          : technology === "TypeScript"
                          ? "bg-sky-600"
                          : technology === "Tailwind"
                          ? "bg-sky-400"
                          : technology === "NextJS"
                          ? "bg-black"
                          : technology === "LocalStorage"
                          ? "bg-orange-400"
                          : ""
                      }`}
                    >
                      <h2>{technology}</h2>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Proyectos;
