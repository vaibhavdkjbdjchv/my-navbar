import React, { useState } from "react";
import all_product from "./../src/Assets/all_product";
import { motion } from "motion/react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "./../src/pages/CartContext";

function MensPage({ menProduct }) {
  const menProducts = all_product.filter((item) => item.category === "men");

  const { cartItems, addToCart } = useCart();
  const [clickedHearts, setClickedHearts] = useState({});
  // const { addToCart } = useCart();
  const handleHeartClick = (product) => {
    addToCart(product);
    setClickedHearts((prev) => ({
      ...prev,
      [product.id]: !prev[product.id], // Toggle heart color state
    }));
  };
  return (
    <div className=" flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full my-20"
      >
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {menProducts.map((product) => (
              <div
                key={product.id}
                className="relative flex flex-col justify-center items-center bg-white shadow-lg p-4 rounded-lg"
              >
                <div className="absolute top-2 right-4">
                  <FontAwesomeIcon
                    onClick={() => addToCart(product)} // Add to Cart on Click
                    icon={faHeart}
                    className="cursor-pointer text-black hover:text-red-600"
                  />
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[60%] object-cover mb-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-red-500 font-bold">${product.new_price}</p>
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
  );
}

export default MensPage;
