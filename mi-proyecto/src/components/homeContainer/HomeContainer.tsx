/* eslint-disable @next/next/no-img-element */
export const HomeContainer = () => {
  return (
    <div className="min-h-[90vh] bg-slate-500 flex flex-col space-y-4 space-x-0 sm:space-y-0 sm:space-x-4 sm:flex-row items-center sm:items-start justify-center p-8">
      <img className="rounded w-3/5 sm:w-[20vh]" src={"/yo.jpg"} alt="" />
      <div className="bg-blue-400 min-h-[70vh] w-full p-2 flex flex-col space-y-3">
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          ¡Hola, soy Pablo Meier!
        </h1>

        <h2 className="text-lg font-medium">
          👋 Soy un desarrollador web Full Stack apasionado por crear soluciones
          tecnológicas innovadoras que mejoran la experiencia del usuario y
          optimizan los procesos empresariales. Con una sólida formación en
          tecnologías frontend y backend, tengo experiencia en el desarrollo de
          aplicaciones web robustas y escalables utilizando herramientas
          modernas como React, Node.js, y Tailwind CSS.
        </h2>

        <h2 className=" text-lg font-medium">
          💻 Aunque soy Full Stack Developer, mi verdadera pasión y
          especialización se encuentran en el Front End, donde puedo aplicar mi
          creatividad y habilidades técnicas para diseñar interfaces de usuario
          atractivas y funcionales.
        </h2>

        <h2 className=" text-lg font-medium">
          🎯 Mi objetivo es seguir creciendo en el desarrollo web, contribuyendo
          con mis habilidades técnicas y creatividad a proyectos desafiantes e
          innovadores. ¡Hablemos y construyamos el futuro juntos!
        </h2>

        <h2 className=" text-lg font-medium">Mail: psmeier05@gmail.com</h2>

        <h2 className=" text-lg font-medium">Github: PabloSMeier</h2>
      </div>
    </div>
  );
};
export default HomeContainer;
