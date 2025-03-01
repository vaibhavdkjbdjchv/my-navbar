import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "./../src/Assets/logo.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";
function Footer() {
  return (
    <motion.div
      initial={{opacity:0, y: 100 }}
      whileInView={{opacity:1, y: 0 }}
      transition={{ duration: 0.5}}
      className="w-[95%] mt-10 rounded-t-4xl h-[40vh] flex items-start  justify-center bg-white"
    >
      <div className=" text-white mt-10 py-8 px-4 md:rounded-t-[100px] rounded-t-4xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Logo Section */}
          <div className="flex flex-col space-y-3">
            <img src={logo} alt="Norby AI Logo" className="h-12 w-12" />
          </div>

          {/* Join Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Join</h3>
            <a href="#" className="text-black hover:font-bold">
              Sign Up
            </a>
            <a href="#" className="text-black hover:font-bold">
              Login
            </a>
          </div>

          {/* Product Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Product</h3>
            <a href="#" className="text-black duration-300 hover:font-bold">
              Pricing
            </a>
            <a href="#" className="text-black duration-300 hover:font-bold">
              Knowledge Base
            </a>
          </div>

          {/* Affiliate Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Affiliate</h3>
            <a href="#" className="text-black duration-300 hover:font-bold">
              Share & Earn
            </a>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Legal</h3>
            <a href="#" className="text-black duration-300 hover:font-bold">
              Privacy & Cookies
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 duration-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm">
            © 2025 Shopper. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-black duration-300 hover:text-red-500 text-xl"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="#"
              className="text-black duration-300 hover:text-black text-xl"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="#"
              className="text-black duration-300 hover:text-blue-700 text-xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="#"
              className="text-black duration-300 hover:text-pink-500 text-xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#"
              className="text-black duration-300 hover:text-blue-500 text-xl"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="#"
              className="text-black duration-300 hover:text-gray-500 text-xl"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
