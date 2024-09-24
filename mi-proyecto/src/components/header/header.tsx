"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="w-full h-[10vh] p-3 z-50 fixed bg-white text-primary font-bold border-b-2 border-primaryB font-yk flex items-center justify-center">
      <div className="w-full max-w-4xl flex items-center justify-between flex-row">
        <button onClick={() => scrollToSection("sobreMi")}>
          <img className=" h-[7.5vh]" src="/logoO.png" alt="" />
        </button>

        <div className="flex items-center justify-center sm:hidden sm:absolute">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none z-10 transition-all duration-300"
          >
            <label>
              <div
                className={`w-9 h-14 cursor-pointer flex flex-col items-center ${
                  isOpen
                    ? "justify-evenly  space-y-0"
                    : "justify-center space-y-1"
                }`}
              >
                <div
                  className={` ${
                    isOpen && "w-[80%] rotate-[45deg] "
                  } w-[75%] h-[3px] bg-primaryB rounded-md transition-all
                   duration-400 origin-left`}
                ></div>
                <div
                  className={`w-[75%] h-[3px] bg-primaryB rounded-md transition-all duration-400 origin-center ${
                    isOpen && "hidden"
                  }`}
                ></div>
                <div
                  className={`${isOpen && "w-[80%] rotate-[-45deg] "}
                  w-[75%] h-[3px] bg-primaryB rounded-md transition-all duration-400 origin-left 
                  `}
                ></div>
              </div>
            </label>
          </button>
          {isOpen ? (
            <div
              className={`h-[90vh] w-full flex flex-col items-center text-xl pt-6 space-y-6 bg-white absolute top-[10vh] right-0 z-10`}
            >
              <button
                onClick={() => scrollToSection("sobreMi")}
                className="flex flex-row items-center space-x-1"
              >
                <svg
                  className="stroke-primaryB"
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="39"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                {language ? <h1>Sobre Mí</h1> : <h1>About Me</h1>}
              </button>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="flex flex-row items-center space-x-1"
              >
                {language ? <h1>Habilidades</h1> : <h1>Skills</h1>}
                <svg
                  className="stroke-primaryB"
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="39"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 8l-4 4l4 4" />
                  <path d="M17 8l4 4l-4 4" />
                  <path d="M14 4l-4 16" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="flex flex-row items-center space-x-1"
              >
                <svg
                  className="stroke-primaryB"
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="39"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
                  <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
                  <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
                {language ? <h1>Proyectos</h1> : <h1>Projects</h1>}
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="flex flex-row items-center space-x-1"
              >
                {language ? <h1>Contacto</h1> : <h1>Contact Me</h1>}
                <svg
                  className="stroke-primaryB"
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="39"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </button>
              <button
                onClick={() => setLanguage(!language)}
                className="h-10 w-10 rounded-full overflow-hidden "
              >
                <img
                  src={language ? "./spanish.png" : "./english.jpg"}
                  className="overflow-hidden h-full"
                  alt=""
                />
              </button>
            </div>
          ) : null}
        </div>

        <div className="sm:flex hidden absolute items-center sm:relative justify-center flex-row space-x-4">
          <button
            onClick={() => scrollToSection("sobreMi")}
            className="hover:scale-110 transition-all duration-300 hover:text-primaryB ease-in-out flex flex-row items-center space-x-1"
          >
            <svg
              className="stroke-primaryB"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            {language ? <h1>Sobre Mí</h1> : <h1>About Me</h1>}
          </button>
          <button
            onClick={() => scrollToSection("habilidades")}
            className="hover:scale-110 transition-all duration-300 hover:text-primaryB ease-in-out flex flex-row items-center space-x-1"
          >
            <svg
              className="stroke-primaryB"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 8l-4 4l4 4" />
              <path d="M17 8l4 4l-4 4" />
              <path d="M14 4l-4 16" />
            </svg>
            {language ? <h1>Habilidades</h1> : <h1>Skills</h1>}
          </button>
          <button
            onClick={() => scrollToSection("proyectos")}
            className="hover:scale-110 transition-all duration-300 hover:text-primaryB ease-in-out flex flex-row items-center space-x-1"
          >
            <svg
              className="stroke-primaryB"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
              <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
              <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
            {language ? <h1>Proyectos</h1> : <h1>Projects</h1>}
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="hover:scale-110 transition-all duration-300 hover:text-primaryB ease-in-out flex flex-row items-center space-x-1"
          >
            <svg
              className="stroke-primaryB"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            {language ? <h1>Contacto</h1> : <h1>Contact Me</h1>}
          </button>
          <button
            onClick={() => setLanguage(!language)}
            className="h-10 w-10 rounded-full overflow-hidden "
          >
            <img
              src={language ? "./spanish.png" : "./english.jpg"}
              className="overflow-hidden h-full"
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
