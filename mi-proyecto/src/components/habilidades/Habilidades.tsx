/* eslint-disable @next/next/no-img-element */
"use client";
import { ISkill, skills } from "@/helpers/skills/skills.helper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Habilidades = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="habilidades"
      className="min-h-[100vh] w-[100vw] py-[10vh] bg-[#eeeeee] justify-center flex flex-col space-y-10 items-center lg:hidden lg:absolute"
    >
      <h1 className="text-3xl font-bold">Habilidades</h1>
      <motion.div
        className={`flex transition-all duration-1000 flex-col space-y-4 ${
          isInView
            ? "transform-none opacity-1"
            : "opacity-0 translate-x-[-200px]"
        }`}
        ref={ref}
      >
        <div className="max-w-md flex flex-wrap justify-center gap-6 md:hidden md:absolute">
          {skills.map((skill: ISkill) => {
            return (
              <div
                key={skill.id}
                className="group w-1/3 md:w-1/4 h-[6.5rem] flex flex-col items-center justify-center border-2 border-[#a1a1a1] shadow-lg rounded-lg overflow-hidden relative hover:border-primaryB hover:shadow-primaryB hover:shadow-sm"
              >
                <img className="w-14" src={skill.img} alt="" />
                <h1 className="text-base text-black font-semibold absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-300">
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
