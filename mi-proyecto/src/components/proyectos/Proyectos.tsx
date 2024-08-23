"use client";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Proyectos = () => {
  return (
    <section id="proyectos" className="md:hidden md:absolute">
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
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="flex flex-col items-center space-y-1">
          <ReactTyped
            className="font-bold"
            strings={["&lt;Pablo Samuel Meier/&gt;"]}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
          <h2>- Desarrollador Web Full Stack -</h2>
          <h2>- Especializado en Front End -</h2>
        </div>
      </motion.div>
    </section>
  );
};
export default Proyectos;
