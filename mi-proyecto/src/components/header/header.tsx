"use client";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Header = () => {
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

      <div className="flex items-center relative justify-center flex-row space-x-4">
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
