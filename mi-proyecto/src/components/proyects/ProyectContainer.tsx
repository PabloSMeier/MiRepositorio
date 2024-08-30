/* eslint-disable @next/next/no-img-element */
"use client";
import { proyects } from "@/helpers/proyects/proyects.helper";
import ProyectCard from "./ProyectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProyectContainer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.section
      id="proyectos"
      className="min-h-[100vh] w-[100vw] py-[12vh] flex flex-col space-y-10 items-center"
    >
      <h1 className="text-3xl font-bold">Proyectos</h1>
      <div className="w-screen p-6 grid md:grid-cols-2 gap-6">
        {proyects.map((proyect) => {
          return <ProyectCard key={proyect.id} proyect={proyect} />;
        })}
      </div>
    </motion.section>
  );
};
export default ProyectContainer;
