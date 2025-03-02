import React from "react";

import { useCart } from "./../src/pages/CartContext";

function ChartBar() {
  const { cartItems } = useCart();
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="w-full h-[70%] my-5 overflow-scroll hideScroll flex justify-center items-start ">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="grid gap-4 mt-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-2 bg border rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-red-500 font-bold">${item.new_price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChartBar;
