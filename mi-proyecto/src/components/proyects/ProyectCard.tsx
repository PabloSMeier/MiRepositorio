/* eslint-disable @next/next/no-img-element */
import { IProyect } from "@/helpers/proyects/proyects.helper";
import Link from "next/link";

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
          className="w-full h-full object-cover object-center transition duration-700 ease-in-out transform group-hover:brightness-75 group-hover:blur-md"
          src={proyect.img}
          alt=""
        />
        <div className="absolute p-6 w-full h-full space-y-2 inset-0 flex flex-col items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h2>{proyect.description}</h2>
          <div className="space-y-2">
            {proyect.deployment !== "" && (
              <Link
                target="blank"
                href={proyect.deployment!}
                className="hover:scale-105 flex-grow-0 transition-all duration-300 ease-in-out flex flex-row items-center space-x-2 bg-accent2 p-1 rounded-md text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                  <path d="M16 3l-4 4l-4 -4" />
                </svg>
                <h2 className="w-5/6 text-center">Demo</h2>
              </Link>
            )}
            {proyect.repo !== "" && (
              <Link
                target="blank"
                href={proyect.repo!}
                className="hover:scale-105 transition-all duration-300 ease-in-out flex flex-row items-center space-x-2 bg-black p-1 rounded-md text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 64 64"
                  fill="none"
                  className=" transition-all ease-in-out duration-300"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 4.00005C25.3525 4.00094 18.9222 6.36681 13.8594 10.6744C8.79647 14.9821 5.43129 20.9504 4.36577 27.5119C3.30025 34.0734 4.6039 40.7999 8.04354 46.4883C11.4832 52.1766 16.8344 56.4557 23.14 58.56C24.54 58.82 25.14 57.96 25.14 57.22V52.46C17.36 54.14 15.72 48.7 15.72 48.7C15.1745 46.9848 14.0226 45.5272 12.48 44.6C9.93995 42.88 12.68 42.9 12.68 42.9C13.5672 43.0254 14.414 43.3518 15.1558 43.8544C15.8976 44.357 16.5147 45.0225 16.96 45.8C17.7346 47.1895 19.0294 48.2145 20.5596 48.6495C22.0898 49.0846 23.7301 48.8941 25.12 48.12C25.2329 46.701 25.8585 45.3716 26.88 44.38C20.68 43.66 14.14 41.26 14.14 30.54C14.0946 27.7558 15.1264 25.0617 17.02 23.02C16.1629 20.6084 16.2631 17.96 17.3 15.62C17.3 15.62 19.64 14.86 25 18.48C29.5829 17.2299 34.417 17.2299 39 18.48C44.34 14.86 46.68 15.62 46.68 15.62C47.7168 17.96 47.817 20.6084 46.96 23.02C48.8535 25.0617 49.8853 27.7558 49.84 30.54C49.84 41.3 43.3 43.66 37.06 44.36C37.7284 45.0376 38.2438 45.8505 38.5716 46.744C38.8993 47.6376 39.0318 48.591 38.96 49.54V57.22C38.96 58.14 39.46 58.84 40.96 58.56C47.2738 56.4531 52.6306 52.1658 56.0697 46.467C59.5088 40.7681 60.8052 34.0306 59.7266 27.4624C58.6479 20.8943 55.2648 14.9252 50.1837 10.6256C45.1026 6.32597 38.656 3.97705 32 4.00005Z"
                    className="fill-white"
                  />
                </svg>
                <h2>Repositorio</h2>
              </Link>
            )}
          </div>
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
