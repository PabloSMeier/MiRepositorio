"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Contacto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="contacto"
      className="min-h-[100vh]  w-[100vw] py-[12vh] bg-white flex flex-col space-y-10 items-center "
    >
      <div className="flex flex-col items-center space-y-2">
        <motion.h1
          className={`text-3xl transition-all duration-1000 font-bold ${
            isInView
              ? "transform-none opacity-1"
              : "opacity-0 translate-x-[-200px]"
          }`}
          ref={ref}
        >
          Formulario de contacto
        </motion.h1>
        <motion.h2
          className={`text-xl transition-all duration-1000 font-semibold ${
            isInView
              ? "transform-none opacity-1"
              : "opacity-0 translate-x-[-200px]"
          }`}
          ref={ref}
        >
          Hablame directamente a mi correo psmeier05@gmail.com
        </motion.h2>
      </div>
      <form action="">
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
      </form>
    </section>
  );
};
export default Contacto;
