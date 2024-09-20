/* eslint-disable @next/next/no-img-element */
"use client";
import { proyects, proyectsE } from "@/helpers/proyects/proyects.helper";
import ProyectCard from "./ProyectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const ProyectContainer = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      id="proyectos"
      className={`min-h-[100vh] w-[100vw] flex flex-col space-y-10 items-center py-[12vh]`}
    >
      {language ? (
        <motion.h1
          className={`text-3xl transition-all  duration-1000 font-bold ${
            isInView
              ? "transform-none opacity-1"
              : "opacity-0 translate-x-[-200px]"
          }`}
        >
          Proyectos
        </motion.h1>
      ) : (
        <motion.h1
          className={`text-3xl transition-all  duration-1000 font-bold ${
            isInView
              ? "transform-none opacity-1"
              : "opacity-0 translate-x-[-200px]"
          }`}
        >
          Projects
        </motion.h1>
      )}

      <motion.div
        className={`flex flex-col w-full transition-all delay-300 duration-1000 space-y-10 items-center ${
          isInView
            ? "transform-none opacity-1"
            : "opacity-0 translate-x-[-200px]"
        }`}
        ref={ref}
      >
        <div className="max-w-[90vw] grid md:grid-cols-2 justify-center gap-6 m-0">
          {language
            ? proyects.map((proyect) => {
                return <ProyectCard key={proyect.id} proyect={proyect} />;
              })
            : proyectsE.map((proyect) => {
                return <ProyectCard key={proyect.id} proyect={proyect} />;
              })}
        </div>
      </motion.div>
    </section>
  );
};
export default ProyectContainer;
