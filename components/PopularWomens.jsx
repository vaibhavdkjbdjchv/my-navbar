import React from "react";
import data_product from "./../src/Assets/data"; // Import the array

const PopularWomens = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data_product.map((product) => (
        <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg">
          <img src={product.image} alt={product.name} className="w-full object-cover mb-4" />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-red-500 font-bold">${product.new_price}</p>
          <p className="text-gray-500 line-through">${product.old_price}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularWomens;
