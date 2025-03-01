import React, { useEffect, useState } from "react";
import logo from "./../src/Assets/logo.png";
import { motion } from "motion/react";
import AuthButtons from "./AuthButtons";

function Header() {
  const [hideText, setHideText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideText(true);
      } else {
        setHideText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="relative flex justify-center items-center">
        <div
          className={`${
            hideText ? "top-5 " : "top-0"
          } fixed w-full delay-75 ease-in-out text-black duration-700 justify-center items-center flex font-bold text-2xl`}
        >
          <div
            className={`${
              hideText
                ? "md:w-[5%] w-[15%] rounded-[100%] py-5 px-5"
                : "md:w-[90%] w-full md:rounded-b-4xl rounded-b-2xl"
            }  py-2  duration-700 ease-in-out shadow-[0px_15px_15px_rgba(0,0,0,0.3)] bg-black h-[7%] flex justify-center items-center `}
          >
            <img src={logo} alt="" className="" />
            <motion.h1
              className={`text-white duration-700 ease-in-out font-bold neueFont ${
                hideText ? " hidden" : " visible"
              }`}
            >
              SHOPPER
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
