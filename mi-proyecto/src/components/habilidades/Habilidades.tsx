/* eslint-disable @next/next/no-img-element */
"use client";
import { useLanguage } from "@/context/LanguageContext";
import { ISkill, skills } from "@/helpers/skills/skills.helper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Habilidades = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="habilidades"
      className="min-h-[100vh] py-[12vh] w-[100vw] bg-white flex flex-col space-y-10 items-center justify-center"
    >
      {language ? (
        <motion.h1
          className={`text-3xl transition-all duration-1000 font-bold ${
            isInView
              ? "transform-none opacity-1"
              : "opacity-0 translate-x-[-200px]"
          }`}
          ref={ref}
        >
          Habilidades
        </motion.h1>
      ) : (
        <motion.h1
          className={`text-3xl transition-all duration-1000 font-bold ${
            isInView
              ? "transform-none opacity-1"
              : "opacity-0 translate-x-[-200px]"
          }`}
          ref={ref}
        >
          Skills
        </motion.h1>
      )}

      <motion.div
        className={`flex transition-all delay-300 duration-1000 flex-col space-y-4 ${
          isInView
            ? "transform-none opacity-1"
            : "opacity-0 translate-x-[-200px]"
        }`}
        ref={ref}
      >
        <div className="max-w-md flex flex-wrap justify-center gap-6">
          {skills.map((skill: ISkill) => {
            return (
              <div
                key={skill.id}
                className="group w-1/3 md:w-1/4 h-[6.5rem] flex flex-col items-center justify-center border-2 border-[#a1a1a1] shadow-lg rounded-lg overflow-hidden relative hover:border-primaryB hover:shadow-primaryB hover:shadow-sm"
              >
                <img className="w-14" src={skill.img} alt="" />
                <h1 className="text-base text-black font-semibold absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-300">
                  {skill.name === "Inglés C1" && !language
                    ? "English C1"
                    : skill.name}
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
