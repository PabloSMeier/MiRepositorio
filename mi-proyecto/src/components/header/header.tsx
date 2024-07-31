import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Header = () => {
  return (
    <header className="w-full h-[10vh] p-5 bg-slate-800 text-white border-b-2 border-blue-300 flex items-center justify-between flex-row">
      <Link href={"/"}>
        <img className=" h-[7.5vh]" src="/logo.png" alt="" />
      </Link>
      <div className="flex items-center justify-center flex-row">
        <Link href={"/about-me"}>Sobre Mí</Link>
      </div>
    </header>
  );
};
export default Header;
