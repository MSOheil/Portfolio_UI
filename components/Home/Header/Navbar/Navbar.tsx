import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
export default function cmp_navbar() {
  const [showNav, setShowNav] = useState(false);
  const [fixedNav, setNavFix] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 120) {
        setNavFix(false);
      } else {
        setNavFix(true);
      }
      if ((window.screenY = 0)) {
        setNavFix(false);
      }
    });
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <nav
      className={
        fixedNav
          ? "h-[10vh] w-full bg-slate-20 shadow-xl fixed z-[100]"
          : "h-[10vh] w-full bg-slate-20 shadow-xl  z-[100]"
      }
    >
      <div className="xl:flex xl:items-center xl:justify-between w-full  py-4 px-10 ">
        <div className="hidden xl:flex">
          <h2 className="uppercase text-xl text-gray-700 tracking-widest">
            .msoheil
          </h2>
        </div>
        <ul className="xl:flex xl:items-center xl:justify-center hidden">
          <Link href="/home">
            <li className="text-sm uppercase tracking-wide">Home</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 text-sm uppercase tracking-wide">Portfolio</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 text-sm uppercase tracking-wide">Services</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 text-sm uppercase tracking-wide">Contact</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 text-sm uppercase tracking-wide">Skills</li>
          </Link>
        </ul>
        <div className="xl:hidden flex w-full justify-between md:items-center ">
          <div className="cursor-pointer" onClick={handleNav}>
            <GiHamburgerMenu />
          </div>
          <div>
            <h2 className="uppercase text-xl text-gray-700 tracking-widest">
              .msoheil
            </h2>
          </div>
        </div>
      </div>
      <div className={showNav ? "h-screen w-full bg-black/70 " : ""}>
        <div
          className={
            showNav
              ? "md:w-[35%] w-[75%] top-0 left-0 bg-slate-300 h-screen fixed duration-500 ease-in"
              : "left-[-100%] duration-500 ease-in fixed"
          }
        >
          <div className="flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between p-4">
              <div>
                <h2 className="uppercase text-xl text-gray-700 tracking-widest">
                  .msoheil
                </h2>
              </div>
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full shadow-xl shadow-gray-400 p-2"
              >
                <AiOutlineClose />
              </div>
            </div>
            <hr className="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <ul className="flex items-start  flex-col p-4">
              <Link href="/home">
                <li className="text-sm uppercase tracking-wide hover:border-b hover:border-gray-700">
                  Home
                </li>
              </Link>
              <Link href="/home">
                <li className="mt-3 text-sm uppercase tracking-wide hover:border-b hover:border-gray-700">
                  Portfolio
                </li>
              </Link>
              <Link href="/home">
                <li className="mt-3 text-sm uppercase tracking-wide hover:border-b hover:border-gray-700">
                  Services
                </li>
              </Link>
              <Link href="/home">
                <li className="mt-3 text-sm uppercase tracking-wide hover:border-b hover:border-gray-700">
                  Contact
                </li>
              </Link>
              <Link href="/home">
                <li className="mt-3 text-sm uppercase tracking-wide hover:border-b hover:border-gray-700">
                  Skills
                </li>
              </Link>
            </ul>
            <hr className="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="w-full text-3xl flex items-center justify-between">
              <div className=" p-4 duration-300 hover:scale-105 ease-in rounded-full shadow-lg shadow-gray-400 cursor-pointer">
                <BsTelegram />
              </div>
              <div className=" p-4 duration-300 hover:scale-105 ease-in rounded-full shadow-lg shadow-gray-400 cursor-pointer">
                <AiFillInstagram />
              </div>
              <div className=" p-4 duration-300 hover:scale-105 ease-in rounded-full shadow-lg shadow-gray-400 cursor-pointer">
                <IoLogoWhatsapp />
              </div>
              <div className="  p-4 duration-300 hover:scale-105 ease-in rounded-full shadow-lg shadow-gray-400 cursor-pointer">
                <AiFillLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
