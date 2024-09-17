"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  showErrorAlert,
  showSuccessAlert,
} from "@/helpers/alerts/alert.helper";

export const Contacto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4atnugj",
        "template_fwlbx2s",
        formData,
        "uYm39j2bO1K5sVK2p"
      )
      .then((result) => {
        console.log(result.text);
        showSuccessAlert("Correo enviado con exito");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error.text);
        showErrorAlert("Hubo un error al enviar el correo");
      });
  };

  return (
    <section
      id="contacto"
      className="min-h-[100vh]  w-[100vw] py-[12vh] bg-white flex flex-col space-y-10 items-center "
    >
      <div className="flex flex-col text-center items-center space-y-2">
        <motion.h1
          className={`text-3xl transition-all duration-1000 font-bold ${
            isInView
              ? "transform-none opacity-1"
              : "opacity-0 translate-x-[-200px]"
          }`}
          ref={ref}
        >
          Formulario de contacto
        </motion.h1>
        <motion.h2
          className={`text-xl transition-all duration-1000 font-semibold${
            isInView
              ? "transform-none opacity-1"
              : "opacity-0 translate-x-[-200px]"
          }`}
          ref={ref}
        >
          Hablame directamente a mi correo: <strong>psmeier05@gmail.com</strong>
        </motion.h2>
      </div>
      <motion.form
        className={`w-[60vw] p-3 space-y-3 rounded-md shadow-sm shadow-slate-400 transition-all duration-1000 delay-300 bg-bg flex flex-col  ${
          isInView
            ? "transform-none opacity-1"
            : "opacity-0 translate-x-[-200px]"
        }`}
        onSubmit={sendEmail}
        ref={ref}
      >
        <div className="flex flex-col space-y-3 w-2/3">
          <input
            className="w-2/3 h-10 p-2"
            type="text"
            placeholder="Nombre"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            className="w-2/3 h-10 p-2"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            className="w-full h-20 p-2 placeholder:align-text-top resize-none"
            placeholder="Quieres contactarme porque..."
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="group px-2 py-1 flex flex-row space-x-1 font-semibold bg-primaryB w-fit text-white self-center hover:bg-white hover:text-primaryB transition-all duration-300 rounded-md border-2 border-primaryB"
          >
            <h2>Enviar</h2>
            <svg
              className="stroke-white group-hover:rotate-45 group-hover:stroke-primaryB transition-all duration-300"
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
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </button>
        </div>
      </motion.form>
    </section>
  );
};
export default Contacto;
