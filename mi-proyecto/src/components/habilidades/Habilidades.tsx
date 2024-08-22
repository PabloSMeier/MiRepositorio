/* eslint-disable @next/next/no-img-element */
"use client";
const Habilidades = () => {
  return (
    <section id="habilidades" className="h-[100vh]">
      <div className="group relative h-fit w-fit p-2 shadow-lg rounded-lg z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full"></div>
        <div className=" container text-white z-20 relative flex flex-col ">
          <div className="h-fit w-full">
            <img src="/css.png" alt="" />
            <h1 className=" h-[0em] group-hover:h-[3em] transition-transform ease-in-out duration-300  ">
              CSS
            </h1>
          </div>
        </div>
      </div>

      <p className="font-nunito block text-white font-light relative h-[0em] group-hover:h-[7em] leading-[1.2em] duration-500 overflow-hidden">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
        officiis, dolorem ab animi magnam culpa fugit error voluptates adipisci,
        debitis ut fuga at nisi laborum suscipit a eos similique unde.
      </p>
    </section>
  );
};
export default Habilidades;
