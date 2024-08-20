"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const sections = ["Sobre mí", "Tecnologías", "Proyectos", "Contacto"];

const Proyectos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <header className="fixed top-0 w-full flex justify-between p-4 bg-white shadow-md">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`p-2 ${
              currentIndex === index ? "text-primary" : "text-primary"
            }`}
          >
            {section}
          </button>
        ))}
      </header>

      <div className="w-screen h-screen flex flex-col tablet:flex-row transition-transform duration-700 ease-in-out">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-100 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl">{section}</h2>
          </motion.div>
        ))}
      </div>

      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="fixed left-0 top-1/2 transform -translate-y-1/2 p-4 bg-white shadow-lg rounded-r"
        >
          {"<"}
        </button>
      )}

      {currentIndex < sections.length - 1 && (
        <button
          onClick={handleNext}
          className="fixed right-0 top-1/2 transform -translate-y-1/2 p-4 bg-white shadow-lg rounded-l"
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default Proyectos;
