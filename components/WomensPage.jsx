import React from "react";
import all_product from "./../src/Assets/all_product";
import Catagery from "./Catagery";
import { motion } from "motion/react";
import banner from "./../src/Assets/banner_women-removebg-preview.png";
function WomensPage() {
  const WomenProducts = all_product.filter((item) => item.category === "women");
  return (
    <div className="w-screen mt-20 text-black justify-center gap-5 flex flex-col font-bold text-2xl ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-[10%] flex justify-around items-end "
      >
        <Catagery />
      </motion.div>
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div
         
          className="w-[90%] h-80 flex bg-gradient-to-r rounded-4xl from-[#000000] to-white"
        >
          <div className="w-[50%] h-full flex justify-center items-center">
            <div className="w-full gap-5 h-full text-white flex flex-col justify-center items-center">
              <h1 className="md:text-7xl text-5xl font-bold">Flat 50% Off</h1>
              <h2 className="md:text-4xl text-2xl flex gap-2">
                <span>12</span>Hours <span>20</span>Mins
              </h2>
              <button className="bg-white text-black duration-700 ease-in-out px-5 py-2 rounded-4xl hover:bg-transparent hover:border-1 hover:text-white">
                Explore now
              </button>
            </div>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <img src={banner} alt="banner" className="w-100"></img>
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

            <div className="grid grid-cols-3 gap-6 p-6">
              {WomenProducts.map((product) => (
                <div
                  key={product.id}
                  className=" p-4 rounded-lg flex flex-col justify-center shadow-md items-center "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover rounded"
                  />
                  <h2 className="w-[80%] text-lg font-semibold mt-2">
                    {product.name}
                  </h2>
                  <div className="w-[80%] mt-2 gap-5 flex">
                    <p className="text-gray-500 text-2xl">
                      ${product.new_price}
                    </p>
                    <p className="line-through text-2xl text-red-500">
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

export default WomensPage;
