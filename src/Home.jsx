import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import hand from "./../src/Assets/hand_icon.png";
import bgimage from "./../src/Assets/hero_image.png";
import { motion } from "motion/react";
import PopularWomens from "../components/PopularWomens";
import exclusive_image from "../src/Assets/exclusive_image.png";
import NewCollection from "../components/NewCollection";
import Footer from "../components/Footer";
// import Catagery from "../../components/Catagery";
function Home() {
  return (
    <>
      <div className="w-screen md:h-screen text-black justify-center flex flex-col font-bold text-2xl ">
     
        <div className="w-full  flex md:flex-row flex-col-reverse justify-center items-center">
          <div className="md:w-[50%]  h-full flex flex-col justify-center items-center">
            <motion.div className="flex px-5 flex-col justify-center items-start md:gap-5 gap-2">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-2xl text-3xl font-semibold md:py-5 robotFont"
              >
                Neew Arrives Only
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="xl:text-7xl md:text-6xl flex uppercase justify-start items-center md:gap-5 neueFont font-bold"
              >
                New <img src={hand} alt="" className="md:w-20 w-10" />
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="xl:text-7xl text-6xl  uppercase neueFont "
              >
                Collection
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="xl:text-7xl text-6xl uppercase neueFont "
              >
                for every one
              </motion.p>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className=" md:w-[50%] cursor-pointer bg-red-600 text-white px-5 py-2 rounded-4xl"
              >
                Letest Collection
              </motion.button>
            </motion.div>
          </div>
          <div className="w-[50%] h-full  flex  justify-center items-center ">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="  flex justify-center items-end"
            >
              <img src={bgimage} alt="" className="w-[90%] " />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-screen py-10">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-[20%] gap-2 text-center flex flex-col justify-end items-center">
            <h1 className="text-4xl uppercase robotFont font-bold">
              Popular in Women
            </h1>
            <div className="w-[10%] h-1 rounded-4xl bg-gray-500 animate-pulse"></div>
          </div>
          <div className="w-[90%] h-[80%] mt-5">
            <PopularWomens />
          </div>
        </div>
      </div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[90%] h-[50%] bg-[#020202fd] flex  rounded-4xl text-white">
          <div className="w-[50%] h-full flex flex-col justify-center items-center">
            <div className=" h-full px-2 flex flex-col justify-center items-start gap-5">
              <h1 className="md:text-7xl text-5xl robotFont font-bold">
                Excusive
              </h1>
              <h1 className="md:text-7xl text-5xl robotFont font-bold">
                Offer For You
              </h1>
              <h2 className="md:text-2xl  font-sans font-semibold">
                ONLY ON BEST SELLERS PRODUCT
              </h2>
              <button className="w-[50%] bg-white text-black py-2 rounded-4xl text-lg font-semibold robotFont hover:border-1 hover:bg-transparent border-white duration-700 hover:text-white cursor-pointer">
                Check Now
              </button>
            </div>
          </div>
          <div className="w-[50%] flex justify-center items-center h-full">
            <img src={exclusive_image} alt="" className="w-80" />
          </div>
        </div>
      </div>
      <div className="w-screen  flex justify-evenly items-center flex-col gap-15">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-5xl font-bold border-b-5 py-5 uppercase robotFont">
            New Collection
          </h1>
        </div>
        <div className="w-[90%] flex justify-center items-center">
          <NewCollection />
        </div>
      </div>
      <div className="w-screen md:h-[50vh] h-auto overflow-hidden flex bg-black justify-center items-end">
        <Footer />
      </div>
    </>
  );
}

export default Home;
