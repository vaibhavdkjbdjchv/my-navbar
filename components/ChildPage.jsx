import React from "react";
import all_product from "./../src/Assets/all_product";
import Catagery from "./Catagery";
import { motion } from "motion/react";
import banner from "./../src/Assets/banner_kids-removebg-preview.png";
function ChildPage() {
  const kidProducts = all_product.filter((item) => item.category === "kid");
  return (
    <div className=" bg text-black justify-center gap-5 flex flex-col font-bold text-2xl ">
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full my-20"
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {kidProducts.map((product) => (
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

export default ChildPage;
