/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const HomeContainer = () => {
  return (
    <div className="min-h-[90vh] flex flex-col space-y-4 space-x-0 sm:space-y-0 sm:space-x-4 sm:flex-row items-center sm:items-start justify-start sm:justify-center p-8">
      <motion.img
        className="rounded-full w-3/5 sm:w-[20vh] border-2 shadow-sm shadow-primaryB"
        src={"/yo.jpg"}
        alt=""
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
};
export default HomeContainer;

// const [container, setContainer] = useState<Number>(1);

{
  /* <div className="border-blue-300 border-2 w-full flex flex-col space-y-2">
        <div className="flex flex-row border-b-2 border-blue-300">
          <div className="w-1/3 flex items-center justify-center border-r-2 border-blue-300">
            <button
              className="text-4xl hover:scale-125 transform duration-300 ease-in-out p-2"
              type="button"
              onClick={() => setContainer(1)}
            >
              👋
            </button>
          </div>
          <div className="w-1/3 flex items-center justify-center border-r-2 border-blue-300">
            <button
              className="text-4xl hover:scale-125 transform duration-300 ease-in-out p-2"
              type="button"
              onClick={() => setContainer(2)}
            >
              💻
            </button>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <button
              className="text-4xl hover:scale-125 transform duration-300 ease-in-out p-2"
              type="button"
              onClick={() => setContainer(3)}
            >
              🎯
            </button>
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold pl-2">
          ¡Hola, soy Pablo Meier!
        </h1>
        <div className="flex flex-col space-y-3 p-2">
          {container == 1 && (
            <h2 className="text-lg font-medium">
              👋 Soy un desarrollador web Full Stack apasionado por crear
              soluciones tecnológicas innovadoras que mejoran la experiencia del
              usuario y optimizan los procesos empresariales. Con una sólida
              formación en tecnologías frontend y backend, tengo experiencia en
              el desarrollo de aplicaciones web robustas y escalables utilizando
              herramientas modernas como React, Node.js, y Tailwind CSS.
            </h2>
          )}
          {container == 2 && (
            <h2 className=" text-lg font-medium">
              💻 Aunque soy Full Stack Developer, mi verdadera pasión y
              especialización se encuentran en el Front End, donde puedo aplicar
              mi creatividad y habilidades técnicas para diseñar interfaces de
              usuario atractivas y funcionales.
            </h2>
          )}
          {container == 3 && (
            <h2 className=" text-lg font-medium">
              🎯 Mi objetivo es seguir creciendo en el desarrollo web,
              contribuyendo con mis habilidades técnicas y creatividad a
              proyectos desafiantes e innovadores. ¡Hablemos y construyamos el
              futuro juntos!
            </h2>
          )}
        </div>
      </div> */
}
