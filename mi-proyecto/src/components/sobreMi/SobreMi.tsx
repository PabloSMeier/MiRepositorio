"use client";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const SobreMi = () => {
  return (
    <section
      id="sobreMi"
      className="h-[100vh] flex flex-col items-center w-full space-y-4"
    >
      <motion.div
        className="flex flex-col items-center space-y-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          className="rounded-full w-3/5 sm:w-[20vh] border-2 shadow-sm shadow-primaryB"
          src={"/yo.jpg"}
          alt=""
          initial={{ y: -15 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1.25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <h1 className="font-extrabold text-primaryB text-2xl">
          Pablo Samuel Meier
        </h1>
      </motion.div>
      <ReactTyped
        className="font-semibold text-center h-[5vh]"
        strings={[
          "&lt;Desarrollador Web Full Stack/&gt;<br/>Especializado en Front End",
        ]}
        typeSpeed={50}
        backSpeed={25}
        loop
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h4 className="text-center">
          Soy Pablo Meier,{" "}
          <strong>
            Técnico <br /> en programación
          </strong>{" "}
          y <strong>Desarrollador web Full Stack</strong> especializado en
          <strong> Front End </strong>con un nivel de <strong>inglés C1</strong>
          , estoy buscando comenzar mi carrera tech dedicandome al
          <strong> desarrollo web</strong> enfocado en las buenas prácticas y
          metodologías ágiles para brindar resultados de calidad.
        </h4>
      </motion.div>
    </section>
  );
};
export default SobreMi;
