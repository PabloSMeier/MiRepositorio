"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { showSuccessAlert } from "@/helpers/alerts/alert.helper";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const SobreMi = () => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("psmeier05@gmail.com");
    language
      ? showSuccessAlert(
          "Dirección de correo electrónico copiada al portapapeles."
        )
      : showSuccessAlert("Email address copied to clipboard");
  };
  return (
    <section
      id="sobreMi"
      className="h-[122.5vh] sm:h-[100vh] flex flex-col justify-center items-center w-full space-y-4"
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
      {language ? (
        <ReactTyped
          className="font-semibold text-center h-[5vh]"
          strings={[
            "&lt;Desarrollador Web Full Stack/&gt;<br/>Especializado en Front End",
          ]}
          typeSpeed={50}
          backSpeed={25}
          loop
        />
      ) : (
        <ReactTyped
          className="font-semibold text-center h-[5vh]"
          strings={[
            "&lt;Full Stack Web Developer/&gt;<br/>Front End Specialized",
          ]}
          typeSpeed={50}
          backSpeed={25}
          loop
        />
      )}

      <motion.div
        className="flex flex-col items-center max-w-lg"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {language ? (
          <h4 className="text-center p-2">
            Soy Pablo Meier, <strong>Técnico en programación</strong> y{" "}
            <strong>Desarrollador web Full Stack</strong> especializado en
            <strong> Front End </strong>con un nivel de{" "}
            <strong>inglés C1</strong>, estoy buscando comenzar mi carrera tech
            dedicandome al
            <strong> desarrollo web</strong> enfocado en las buenas prácticas y
            metodologías ágiles para brindar resultados de calidad.
          </h4>
        ) : (
          <h4 className="text-center p-2">
            I´m Pablo Meier, a <strong>Programming Technician</strong> y{" "}
            <strong>Full Stack Web Developer</strong> specialized in
            <strong> Front End developing </strong>with a{" "}
            <strong>C1 english</strong> level, i´m looking to start my career in
            tech by
            <strong> web developing</strong> focused on good practices and agile
            methodologies in order to be able to offer a good quality product.
          </h4>
        )}
      </motion.div>
      <motion.div
        className="flex flex-col space-y-3 items-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-row space-x-2">
          <Link
            href={"https://www.linkedin.com/in/pablo-meier-519724268/"}
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 100 100"
              fill="none"
              className="cursor-pointer hover:rotate-6 hover:scale-110 ease-in-out duration-300"
            >
              <path
                d="M87.5 77.0833C87.5 82.8375 82.8375 87.5 77.0833 87.5H22.9167C17.1646 87.5 12.5 82.8375 12.5 77.0833V22.9167C12.5 17.1625 17.1646 12.5 22.9167 12.5H77.0833C82.8375 12.5 87.5 17.1625 87.5 22.9167V77.0833Z"
                className="fill-primaryB"
              />
              <path
                opacity="0.05"
                d="M62.5 77.0833V56.0437C62.5 52.525 60.7938 50.4229 57.9334 50.4229C56.2354 50.4229 54.9875 51.3792 54.2271 53.2646C54.1917 53.3979 54.1417 53.9417 54.1625 55.5854L54.1667 77.0833H39.5834V37.5H54.1667V39.7104C56.2959 38.2417 58.9063 37.5 61.9542 37.5C71.4271 37.5 77.0813 43.9437 77.0813 54.7375L77.0834 77.0833H62.5ZM22.9167 77.0833V37.5H30.1188C25.9459 37.5 22.9167 34.4333 22.9167 30.2062C22.9167 25.9833 25.9959 22.9167 30.2375 22.9167C34.4292 22.9167 37.4146 25.8979 37.5 30.1646C37.5 34.4229 34.4188 37.5 30.1771 37.5H37.5V77.0833H22.9167Z"
                fill="black"
              />
              <path
                opacity="0.07"
                d="M63.5416 76.0417V56.0438C63.5416 51.9333 61.3937 49.3813 57.9333 49.3813C55.2354 49.3813 53.9021 51.2813 53.2604 52.875C53.0896 53.2896 53.1125 54.9354 53.1208 55.6375L53.125 76.0417H40.625V38.5417H53.125V41.9542C54.7812 40.2396 57.4479 38.5417 61.9541 38.5417C70.7729 38.5417 76.0396 44.5958 76.0396 54.7375L76.0416 76.0417H63.5416ZM23.9583 76.0417V38.5417H36.4583V76.0417H23.9583ZM30.1187 36.4583C26.55 36.4583 23.9583 33.8292 23.9583 30.2063C23.9583 26.5854 26.6 23.9583 30.2375 23.9583C33.8291 23.9583 36.3854 26.5188 36.4583 30.1854C36.4583 33.8292 33.8166 36.4583 30.1771 36.4583H30.1187Z"
                fill="black"
              />
              <path
                d="M25 39.5833H35.4167V75H25V39.5833ZM30.1771 35.4167H30.1187C27.0104 35.4167 25 33.1 25 30.2062C25 27.25 27.0729 25 30.2375 25C33.4062 25 35.3583 27.25 35.4167 30.2062C35.4167 33.0979 33.4062 35.4167 30.1771 35.4167ZM75 75H64.5833V56.0437C64.5833 51.4646 62.0312 48.3396 57.9333 48.3396C54.8062 48.3396 53.1146 50.4479 52.2937 52.4854C51.9937 53.2146 52.0833 55.2312 52.0833 56.25V75H41.6667V39.5833H52.0833V45.0333C53.5854 42.7083 55.9375 39.5833 61.9542 39.5833C69.4083 39.5833 74.9979 44.2708 74.9979 54.7375L75 75Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href={"https://github.com/PabloSMeier"} target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 64 64"
              fill="none"
              className="cursor-pointer hover:rotate-6 hover:scale-110 ease-in-out duration-300"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32 4.00005C25.3525 4.00094 18.9222 6.36681 13.8594 10.6744C8.79647 14.9821 5.43129 20.9504 4.36577 27.5119C3.30025 34.0734 4.6039 40.7999 8.04354 46.4883C11.4832 52.1766 16.8344 56.4557 23.14 58.56C24.54 58.82 25.14 57.96 25.14 57.22V52.46C17.36 54.14 15.72 48.7 15.72 48.7C15.1745 46.9848 14.0226 45.5272 12.48 44.6C9.93995 42.88 12.68 42.9 12.68 42.9C13.5672 43.0254 14.414 43.3518 15.1558 43.8544C15.8976 44.357 16.5147 45.0225 16.96 45.8C17.7346 47.1895 19.0294 48.2145 20.5596 48.6495C22.0898 49.0846 23.7301 48.8941 25.12 48.12C25.2329 46.701 25.8585 45.3716 26.88 44.38C20.68 43.66 14.14 41.26 14.14 30.54C14.0946 27.7558 15.1264 25.0617 17.02 23.02C16.1629 20.6084 16.2631 17.96 17.3 15.62C17.3 15.62 19.64 14.86 25 18.48C29.5829 17.2299 34.417 17.2299 39 18.48C44.34 14.86 46.68 15.62 46.68 15.62C47.7168 17.96 47.817 20.6084 46.96 23.02C48.8535 25.0617 49.8853 27.7558 49.84 30.54C49.84 41.3 43.3 43.66 37.06 44.36C37.7284 45.0376 38.2438 45.8505 38.5716 46.744C38.8993 47.6376 39.0318 48.591 38.96 49.54V57.22C38.96 58.14 39.46 58.84 40.96 58.56C47.2738 56.4531 52.6306 52.1658 56.0697 46.467C59.5088 40.7681 60.8052 34.0306 59.7266 27.4624C58.6479 20.8943 55.2648 14.9252 50.1837 10.6256C45.1026 6.32597 38.656 3.97705 32 4.00005Z"
                className="fill-primaryB"
              />
            </svg>
          </Link>
          <div className="relative group">
            <svg
              onClick={copyToClipboard}
              aria-label={
                language
                  ? "Copiar dirección de correo electrónico"
                  : "Copy email address to clipboard"
              }
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 100 100"
              fill="none"
              className="cursor-pointer hover:rotate-6 hover:scale-110 ease-in-out duration-300"
            >
              <path
                d="M11.4584 84.375H88.5417C92.5688 84.375 95.8334 81.1104 95.8334 77.0833V22.9167C95.8334 18.8896 92.5688 15.625 88.5417 15.625H11.4584C7.43127 15.625 4.16669 18.8896 4.16669 22.9167V77.0833C4.16669 81.1104 7.43127 84.375 11.4584 84.375Z"
                className="fill-white"
              />
              <path
                d="M54.1667 84.375H88.5417C92.5688 84.375 95.8334 81.1104 95.8334 77.0833V22.9167C95.8334 18.8896 92.5688 15.625 88.5417 15.625H11.4584C7.43127 15.625 4.16669 18.8896 4.16669 22.9167L54.1667 84.375Z"
                className="fill-white"
              />
              <path
                d="M14.0521 84.375H88.5416C92.5687 84.375 95.8333 81.1104 95.8333 77.0833V23.9583L14.0521 84.375Z"
                className="fill-white"
              />
              <path
                d="M53.6354 84.375H88.5417C92.5688 84.375 95.8333 81.1104 95.8333 77.0833V23.9583L39.1063 65.8667L53.6354 84.375Z"
                className="fill-white"
              />
              <path
                d="M88.5417 19.7917H11.4584C7.43127 19.7917 4.16669 18.8896 4.16669 22.9167V77.0833C4.16669 81.1104 7.43127 84.375 11.4584 84.375H14.5834V25H85.4167V84.375H88.5417C92.5688 84.375 95.8334 81.1104 95.8334 77.0833V22.9167C95.8334 18.8896 92.5688 19.7917 88.5417 19.7917Z"
                className="fill-primaryB"
              />
              <path
                d="M88.5417 15.625H50H11.4584C7.43127 15.625 4.16669 18.825 4.16669 22.9167C4.16669 25.4292 7.32919 27.6208 7.32919 27.6208L50 57.825L92.6708 27.6229C92.6708 27.6229 95.8334 25.4292 95.8334 22.9188C95.8334 18.825 92.5688 15.625 88.5417 15.625Z"
                className="fill-white"
              />
              <path
                d="M90.0958 15.7958L50 43.75L9.90419 15.7958C6.62502 16.4979 4.16669 19.3688 4.16669 22.9167C4.16669 25.4292 7.32919 27.6208 7.32919 27.6208L50 57.825L92.6708 27.6229C92.6708 27.6229 95.8334 25.4292 95.8334 22.9188C95.8334 19.3688 93.375 16.4979 90.0958 15.7958Z"
                className="fill-primaryB"
              />
            </svg>
            <span className="absolute left-0 top-full mt-2 hidden w-max bg-gray-800 text-white text-xs rounded py-1 px-2 group-hover:block">
              {language ? (
                <h1>Copiar dirección de correo electrónico</h1>
              ) : (
                <h1>Copy email address to clipboard</h1>
              )}
            </span>
          </div>
        </div>
        <a
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="/Pablo Meier CV.pdf"
          download="Pablo Meier CV"
          className="px-4 py-2 bg-primaryB text-white font-semibold rounded-md hover:bg-transparent border-2 border-primaryB hover:text-primaryB ease-in-out duration-300 flex flex-row items-center space-x-2"
        >
          {language ? <h2>Descargar CV</h2> : <h2>Resume</h2>}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="20"
            viewBox="0 0 48 56"
            fill="none"
          >
            <path
              d="M44 44V52H4V44H0V52C0 53.0609 0.421427 54.0783 1.17157 54.8284C1.92172 55.5786 2.93913 56 4 56H44C45.0609 56 46.0783 55.5786 46.8284 54.8284C47.5786 54.0783 48 53.0609 48 52V44H44ZM44 24L41.18 21.18L26 36.34V0H22V36.34L6.82 21.18L4 24L24 44L44 24Z"
              className={`${
                isHovered
                  ? "fill-primaryB  duration-300"
                  : "fill-white  duration-300"
              }`}
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};
export default SobreMi;
