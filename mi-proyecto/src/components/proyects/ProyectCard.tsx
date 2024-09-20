/* eslint-disable @next/next/no-img-element */
import { IProyect } from "@/helpers/proyects/proyects.helper";

const ProyectCard = ({ proyect }: { proyect: IProyect }) => {
  return (
    <div
      key={proyect.id}
      className="flex flex-col justify-between w-full max-w-[90vw] h-[32vh] 2xl:h-[50vh] bg-white rounded-md group"
    >
      <div className="flex flex-row w-full px-2 space-x-3 h-12 items-center font-bold text-xl">
        <img className="h-10 rounded-md" src={proyect.logo} alt="" />
        <h1 className="">{proyect.name}</h1>
      </div>
      <div className="w-full overflow-hidden relative flex items-center justify-center">
        <img
          className="w-full h-full object-cover object-center transition duration-700 ease-in-out transform group-hover:brightness-90 group-hover:blur-md"
          src={proyect.img}
          alt=""
        />
        <div className="absolute p-6 w-full h-full inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {proyect.description}
        </div>
      </div>
      <div className="w-full min-h-12 p-2 flex flex-row space-x-2 items-center justify-start">
        {proyect.technologies?.map((technology: string) => {
          return (
            <div
              key={technology}
              className={`text-white py-1 px-2 text-xs rounded-md font-semibold ${
                technology === "React"
                  ? "bg-cyan-300"
                  : technology === "TypeScript"
                  ? "bg-sky-600"
                  : technology === "Tailwind"
                  ? "bg-sky-400"
                  : technology === "NextJS"
                  ? "bg-black"
                  : technology === "LocalStorage"
                  ? "bg-orange-300"
                  : technology === "JavaScript"
                  ? "bg-amber-300"
                  : technology === "HTML"
                  ? "bg-orange-500"
                  : technology === "CSS"
                  ? "bg-blue-600"
                  : ""
              }`}
            >
              <h2>{technology}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProyectCard;
