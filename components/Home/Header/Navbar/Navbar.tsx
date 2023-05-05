import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import {BsFillSunFill,BsFillMoonStarsFill} from 'react-icons/bs'
import { GiHamburgerMenu } from "react-icons/gi";
export default function cmp_navbar() {
  const [showNav, setShowNav] = useState(false);
  const [fixedNav, setNavFix] = useState(false);
  const [showDark, setShowDark] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  const ShowDark=()=>{
    setShowDark(!showDark);
  }
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
      className="h-[15vh] lg:h-[12vh] w-full shadow-2xl  fixed  z-[100]"
    >
     <div className= { fixedNav?"w-full h-full bg-[#394867] text-[#9BA4B5]  shadow-2xl  ":
    "w-full h-full  bg-[#394867]  shadow-xl "
    }>
     <div className="xl:flex xl:items-center  xl:justify-between w-full  py-4 px-10 ">
        <div className="hidden xl:flex">
          <h2  className=
          {showNav?"uppercase  text-sm     hover:text-[#F1F6F9] text-[#F1F6F9]   cursor-pointer tracking-widest ease-in-out duration-500"
          :"uppercase border border-transparent    text-[#F1F6F9]  hover:text-[#9BA4B5] cursor-pointer hover:text-blue-9500  text-2xl tracking-widest ease-in-out duration-500"}
          >
            .msoheil
          </h2>
        </div>
        <ul className="xl:flex  items-center  justify-center hidden">
          <Link href="/home">
            <li className=" uppercase text-lg tracking-wide
          text-[#F1F6F9]  hover:text-[#9BA4B5]
            border duration-300 ease-in-out border-transparent
            hover:border-b-[#F1F6F9]
           
            
            ">Home</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 
               border duration-300 ease-in-out border-transparent 
               hover:border-b-[#F1F6F9]       text-[#F1F6F9]  hover:text-[#9BA4B5] text-lg  uppercase tracking-wide">Portfolio</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 
               border duration-300 ease-in-out border-transparent 
               hover:border-b-[#F1F6F9] text-[#F1F6F9]  hover:text-[#9BA4B5]     text-lg  uppercase tracking-wide">Services</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 
               border duration-300 ease-in-out border-transparent 
               hover:border-b-[#F1F6F9]    text-[#F1F6F9]  hover:text-[#9BA4B5] text-lg  uppercase tracking-wide">Contact</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 
               border duration-300 ease-in-out border-transparent 
               hover:border-b-[#F1F6F9]  text-[#F1F6F9]  hover:text-[#9BA4B5]  text-lg  uppercase tracking-wide">Skills</li>
          </Link>
        </ul>
        <div className="xl:hidden flex w-full justify-between md:items-center ">
          <div className="cursor-pointer" onClick={handleNav}>
            <GiHamburgerMenu />
          </div>
          <div>
            <h2 className=
          {showNav?"uppercase  text-sm text-[#F1F6F9]  hover:text-[#9BA4B5] cursor-pointer tracking-widest ease-in-out duration-500"
          :"uppercase border border-transparent cursor-pointer hover:text-blue-9500  text-2xl text-[#F1F6F9]  hover:text-[#9BA4B5] tracking-widest ease-in-out duration-500"}
         >
              .msoheil
            </h2>
          </div>
        </div>
        <div  className="xl:flex hidden">
          <button className="bg-transparent hover:bg-[#F1F6F9] duration-500 ease-in-out text-[#9BA4B5] font-semibold hover:text-[#212A3E] py-2 px-4 border border-[#212A3E] hover:border-transparent rounded">Let's Chat</button>
          <button onClick={ShowDark} className="bg-transparent  ml-2 hover:bg-[#F1F6F9] duration-500 ease-in-out text-[#9BA4B5] font-semibold hover:text-[#212A3E] py-2 px-4 border border-[#212A3E] hover:border-transparent rounded"> 
        {
        showDark==true?<BsFillSunFill/>:
          <BsFillMoonStarsFill/>}  
        
          </button>
     
        </div>
      </div>
      <div className={showNav ? "h-screen w-full bg-black/70 " : ""}>
        <div
          className={
            showNav
              ? "md:w-[35%] w-[75%]  top-0 left-0 bg-[#394867]  h-screen fixed duration-500 ease-in"
              : "left-[-100%] duration-500 ease-in fixed"
          }
        >
          <div className="flex flex-col items-start justify-center">
            <div className="w-full flex items-center justify-between p-4">
              <div>
                <h2 className="uppercase text-xl text-[#F1F6F9]  hover:text-[#9BA4B5] tracking-widest">
                  .msoheil
                </h2>
              </div>
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full shadow-xl text-[#F1F6F9]  hover:text-[#9BA4B5] shadow-gray-400 p-2"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="w-full h-[1px] my-3 bg-[#F1F6F9]"></div>

            <ul className="flex items-start  flex-col p-4">
          <Link href="/home">
            <li className="ml-4  uppercase text-lg tracking-wide
            text-[#F1F6F9]  hover:text-[#9BA4B5]
            border duration-300 ease-in-out border-transparent
            hover:border-b-[#9BA4B5]
            
            ">Home</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 
               border duration-300 ease-in-out border-transparent text-[#F1F6F9]  hover:text-[#9BA4B5]
               hover:border-b-[#F1F6F9] text-lg  uppercase tracking-wide">Portfolio</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 
               border duration-300 ease-in-out border-transparent text-[#F1F6F9]  hover:text-[#9BA4B5]
               hover:border-b-[#F1F6F9]  text-lg  uppercase tracking-wide">Services</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 
               border duration-300 ease-in-out border-transparent  text-[#F1F6F9]  hover:text-[#9BA4B5]
               hover:border-b-[#F1F6F9] text-lg  uppercase tracking-wide">Contact</li>
          </Link>
          <Link href="/home">
            <li className="ml-4 
               border duration-300 ease-in-out border-transparent text-[#F1F6F9]  hover:text-[#9BA4B5]
               hover:border-b-[#F1F6F9] text-lg  uppercase tracking-wide">Skills</li>
          </Link>

        </ul>
        <div className="w-full h-[1px] my-3 bg-[#F1F6F9]"></div>
            <div className="w-full text-3xl flex text-[#F1F6F9] items-center justify-between">
              <div className="text-[#F1F6F9] p-4 duration-300 hover:scale-105 ease-in rounded-full shadow-lg shadow-blue-800 cursor-pointer">
                <BsTelegram />
              </div>
              <div className=" p-4 duration-300 hover:scale-105 ease-in rounded-full shadow-lg shadow-blue-800 cursor-pointer">
                <AiFillInstagram />
              </div>
              <div className=" p-4 duration-300 hover:scale-105 ease-in rounded-full shadow-lg shadow-blue-800 cursor-pointer">
                <IoLogoWhatsapp />
              </div>
              <div className="  p-4 duration-300 hover:scale-105 ease-in rounded-full shadow-lg shadow-blue-800 cursor-pointer">
                <AiFillLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </nav>
  );
}
