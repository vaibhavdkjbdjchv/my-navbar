import React from "react";
import all_product from "./../src/Assets/all_product";
import { NavLink } from "react-router-dom";
import CatageryPage from "./pages/CatageryPage";

function List() {
  const mensDiv = () => {
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
            <p className="text-red-500 font-bold">${product.new_price}</p>
            <p className="text-gray-500 line-through">${product.old_price}</p>
          </div>
        </div>
      ))}
    </div>;
  };

  const menProducts = all_product.filter((item) => item.category === "men");
  const WomenProducts = all_product.filter((item) => item.category === "women");
  const kid = all_product.filter((item) => item.category === "kid");
  return (
    <div className="w-[100vw] mt-30 font-bold text-2xl flex justify-center items-center">
      <CatageryPage />
    </div>
  );
}

export default List;
