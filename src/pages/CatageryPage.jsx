import React, { useState } from "react";
import banner from "./../Assets/banner_mens-removebg-preview.png";
import Womenbanner from "./../Assets/banner_women-removebg-preview.png";
import kidsbanner from "./../Assets/banner_kids-removebg-preview.png";

import { motion } from "motion/react";
import MensPage from "../../components/MensPage";
import WomensPage from "../../components/WomensPage";
import ChildPage from "../../components/ChildPage";

function CatageryPage() {
  const [mensDivActive, setMensDivActive] = useState(true);
  const [womensDivActive, setWoMensDivActive] = useState(false);
  const [kidsDivActive, setKidsDivActive] = useState(false);

  return (
    <div className="w-screen  text-black justify-center gap-5 flex flex-col font-bold text-2xl ">
      <div className="w-full flex justify-evenly items-center my-5">
        <button
          className={`px-3 ${mensDivActive ? "border-b-2 " : ""}`}
          onClick={() => {
            setWoMensDivActive(false);
            setKidsDivActive(false);
            setMensDivActive(true);
          }}
        >
          Mens
        </button>
        <button
          className={`px-3 ${womensDivActive ? "border-b-2 " : ""}`}
          onClick={() => {
            setMensDivActive(false);
            setKidsDivActive(false);
            setWoMensDivActive(true);
          }}
        >
          Womens
        </button>
        <button
          className={`px-3 ${kidsDivActive ? "border-b-2 " : ""}`}
          onClick={() => {
            setMensDivActive(false);
            setWoMensDivActive(false);
            setKidsDivActive(true);
          }}
        >
          Kids
        </button>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div className="w-[90%] h-80 flex bg-gradient-to-r rounded-4xl from-[#000000] to-[rgb(238, 238, 238)]">
          <div className="md:w-[50%] w-full px-2 h-full flex justify-center items-center">
            <div className="w-full gap-5 h-full text-white flex flex-col justify-center items-center">
              <h1 className="md:text-7xl text-7xl font-bold">Flat 50% Off</h1>
              <h2 className="md:text-4xl text-3xl flex gap-2">
                <span>12</span>Hours <span>20</span>Mins
              </h2>
              <button className="bg-white text-black duration-700 ease-in-out px-5 py-2 rounded-4xl hover:bg-transparent hover:border-1 hover:text-white">
                Explore now
              </button>
            </div>
          </div>
          <div className="md:w-[50%] w-0 mobileView flex justify-center items-center">
            <img
              src={banner}
              alt="banner"
              className={`w-80 ${mensDivActive ? "visible" : " hidden"}`}
            ></img>
            <img
              src={Womenbanner}
              alt="banner"
              className={`w-100 absolute ${
                womensDivActive ? " visible" : "hidden"
              }`}
            ></img>
            <img
              src={kidsbanner}
              alt="banner"
              className={`w-75 absolute${
                kidsDivActive ? " visible" : " hidden"
              } `}
            ></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mt-20"
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-[90%]">
              <h1 className="text-3xl">Showing 1-12out of 36 product</h1>
            </div>

            <div className="w-full flex justify-center items-center">
              <div className="w-[90%]">
                {mensDivActive ? <MensPage /> : ""}
                {womensDivActive ? <WomensPage /> : ""}
                {kidsDivActive ? <ChildPage /> : ""}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CatageryPage;
