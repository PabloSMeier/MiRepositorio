"use client";
import Link from "next/link";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full h-[10vh] p-3 z-50 fixed bg-white text-primary font-bold border-b-2 border-primaryB flex items-center justify-between flex-row font-yk">
      <Link href={"/"}>
        <img className=" h-[7.5vh]" src="/logoO.png" alt="" />
      </Link>

      <div className="flex items-center justify-center">
        {isOpen ? (
          <div className="h-12 w-12 flex border-2 border-primaryB absolute top-0 right-0 z-10"></div>
        ) : null}
        <button
          onClick={() => toggleMenu()}
          className="focus:outline-none z-10 transition-all duration-300"
        >
          <label>
            <div className="w-9 h-14 cursor-pointer flex flex-col items-center justify-evenly">
              <div
                className={` ${
                  isOpen && "w-[80%] rotate-[45deg] translate-y-0"
                } w-[75%] h-[3px] bg-primaryB rounded-md transition-all
                   duration-400 origin-left translate-y-[0.45rem]`}
              ></div>
              <div
                className={`w-[75%] h-[3px] bg-primaryB rounded-md transition-all duration-400 origin-center ${
                  isOpen && "hidden"
                }`}
              ></div>
              <div
                className={`${isOpen && "w-[80%] rotate-[-45deg] translate-y-0"}
                  w-[75%] h-[3px] bg-primaryB rounded-md transition-all duration-400 origin-left 
                  -translate-y-[0.45rem]`}
              ></div>
            </div>
          </label>
        </button>
      </div>

      <div className="sm:flex hidden absolute items-center sm:relative justify-center flex-row space-x-4">
        <button onClick={() => scrollToSection("sobreMi")}>Sobre Mí</button>
        <button onClick={() => scrollToSection("habilidades")}>
          Habilidades
        </button>
        <button onClick={() => scrollToSection("proyectos")}>Proyectos</button>
        <button onClick={() => scrollToSection("contacto")}>Contacto</button>
      </div>
    </header>
  );
};
export default Header;
