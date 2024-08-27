/* eslint-disable @next/next/no-img-element */
"use client";

import { ISkill, skillsF } from "@/helpers/skills/skills.helper";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const Habilidades = () => {
  const controls = useAnimation();

  // Hook para detectar cuando el elemento está en vista
  const { ref, inView } = useInView({
    threshold: 0.1, // El div será considerado en vista cuando un 10% sea visible
    triggerOnce: true, // La animación solo se dispara una vez
  });

  // Efecto para controlar la animación según la visibilidad del div
  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0, // Mover el div a su posición original
        opacity: 1, // Hacer que el div sea completamente visible
        transition: { duration: 1, ease: "easeOut" }, // Configuración de la transición
      });
    }
  }, [controls, inView]);

  return (
    <section
      id="habilidades"
      className="h-[100vh] w-[100vw] p-6 bg-[#eeeeee] flex flex-col space-y-10 items-center lg:hidden lg:absolute"
    >
      <h1 className="text-3xl font-bold">Habilidades</h1>
      <motion.div
        className="flex flex-col space-y-4"
        ref={ref}
        initial={{ x: -250, opacity: 0 }}
        animate={controls}
      >
        <h2 className="text-xl font-semibold">Front End</h2>
        <div className="max-w-md flex flex-wrap justify-center gap-2 md:hidden md:absolute">
          {skillsF.map((skill: ISkill) => {
            return (
              <div
                key={skill.id}
                className="group w-1/4 h-[6.5rem] flex flex-col items-center justify-center border-2 border-[#a1a1a1] shadow-lg rounded-lg overflow-hidden relative"
              >
                <img className="w-14" src={skill.img} alt="" />
                <h1 className="text-xl text-black font-semibold absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-300">
                  {skill.name}
                </h1>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
export default Habilidades;
