import React from "react";
import { NavLink } from "react-router-dom";

function Catagery() {
  return (
    <div className="w-[80%] flex  gap-5">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `hover:border-b-2 md:text-2xl text-lg  duration-500 ease-in-out hover:text-black py-5 px-5  ${
            isActive ? " border-b-2" : ""
          }`
        }
      >
        Shop
      </NavLink>
      <NavLink
        to={"/mens"}
        className={({ isActive }) =>
          `hover:border-b-2 md:text-2xl text-lg  duration-500 ease-in-out hover:text-black py-5 px-5  ${
            isActive ? " border-b-2" : ""
          }`
        }
      >
        Mens
      </NavLink>
      <NavLink
        to={"/womens"}
        className={({ isActive }) =>
          `hover:border-b-2 md:text-2xl text-lg duration-500 ease-in-out hover:text-black py-5 px-5  ${
            isActive ? " border-b-2" : ""
          }`
        }
      >
        Womens
      </NavLink>
      <NavLink
        to={"/child"}
        className={({ isActive }) =>
          `hover:border-b-2 md:text-2xl text-lg duration-500 ease-in-out hover:text-black py-5 px-5  ${
            isActive ? " border-b-2" : ""
          }`
        }
      >
        Kids
      </NavLink>
    </div>
  );
}

export default Catagery;
