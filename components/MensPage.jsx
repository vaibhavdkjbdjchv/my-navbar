import React from "react";
import Catagery from "./Catagery";
import all_product from "./../src/Assets/all_product";
import banner from "./../src/Assets/banner_mens-removebg-preview.png";
import { motion } from "motion/react";

function MensPage() {
  const menProducts = all_product.filter((item) => item.category === "men");
  return (
    <div className="w-screen mt-20 text-black justify-center gap-5 flex flex-col font-bold text-2xl ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-[10%] overflow-scroll scroll-smooth flex justify-around items-end "
      >
        <Catagery />
      </motion.div>
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div className="w-[90%] h-80 flex bg-gradient-to-r rounded-4xl from-[#000000] to-white">
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
            <img src={banner} alt="banner" className="w-80"></img>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mt-20"
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-[80%] h-[80%] flex flex-col gap-5">
              <h1 className="text-3xl">Showing 1-12out of 36 product</h1>
            </div>

            <div className="w-[90%] p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {menProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col justify-center items-center bg-white shadow-lg p-4 rounded-lg"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[60%] object-cover mb-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-red-500 font-bold">
                      ${product.new_price}
                    </p>
                    <p className="text-gray-500 line-through">
                      ${product.old_price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MensPage;
