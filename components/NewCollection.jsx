import React from "react";
import new_collections from "../src/Assets/new_collections";

function NewCollection() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {new_collections.map((product) => (
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
    </div>
  );
}

export default NewCollection;
