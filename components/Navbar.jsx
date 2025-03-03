import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";

import {
  faCartShopping,
  faHome,
  faList,
  faSearch,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <motion.div className="relative flex justify-center items-center">
      <motion.div className="fixed z-999 bottom-0 md:w-[90%] w-[90%] h-[5%] md:h-[8%] flex justify-center items-center rounded-t-2xl md:rounded-t-4xl bg-black text-2xl shadow-[0px_-15px_15px_rgba(0,0,0,0.3)] ">
        <div className="w-[90%] flex md:text-3xl text-lg justify-between  items-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `hover:bg-white  duration-500 ease-in-out hover:text-black md:py-6 md:px-6 px-3 py-2 rounded-full  ${
                isActive
                  ? "bg-white font-semibold text-black  -mt-20 shadow-[0px_-5px_15px_rgba(0,0,0,0.3)]"
                  : "bg-transparent text-white"
              }`
            }
          >
            <FontAwesomeIcon
              icon={faHome}
              className="text-center 
          "
            />
          </NavLink>
          <NavLink
            to={"/search"}
            className={({ isActive }) =>
              `hover:bg-white duration-700 ease-in-out hover:text-black md:py-6 md:px-6 px-3 py-2 rounded-full ${
                isActive
                  ? "bg-white text-black -mt-20 shadow-[0px_-5px_15px_rgba(0,0,0,0.3)]"
                  : "bg-transparent text-white"
              }`
            }
          >
            <FontAwesomeIcon icon={faUsers} />
          </NavLink>
          <NavLink
            to={"/list"}
            className={({ isActive }) =>
              `hover:bg-white duration-700 ease-in-out hover:text-black py-5 px-6 rounded-full ${
                isActive
                  ? "bg-white text-black -mt-20 shadow-[0px_-5px_15px_rgba(0,0,0,0.3)]"
                  : "bg-transparent text-white"
              }`
            }
          >
            {" "}
            <FontAwesomeIcon icon={faList} className=" " />
          </NavLink>
          <NavLink
            to={"/chartlist"}
            className={({ isActive }) =>
              `hover:bg-white duration-700 ease-in-out hover:text-black md:py-6 md:px-6 px-3 py-2 rounded-full ${
                isActive
                  ? "bg-white dura text-black -mt-20  shadow-[0px_-5px_15px_rgba(0,0,0,0.3)] "
                  : "bg-transparent text-white"
              }`
            }
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          <NavLink
            to={"/user"}
            className={({ isActive }) =>
              `hover:bg-white duration-700 ease-in-out hover:text-black p-1 ${
                isAuthenticated ? "p-1" : "py-7 px-8"
              }  rounded-full ${
                isActive
                  ? "bg-white dura text-black -mt-20 font-bold  shadow-[0px_-5px_15px_rgba(0,0,0,0.3)] "
                  : "bg-transparent text-white"
              }`
            }
          >
            {isAuthenticated ? (
              <img src={user.picture} className=" rounded-full md:w-15 w-10" />
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
          </NavLink>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
