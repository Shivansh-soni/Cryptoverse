import React from "react";
import coin from "../../assets/coin.png";

import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      className="main__bg scale-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{
        opacity: 1,
      }}
    >
      {/* <Navbar /> */}
      <div className="hero min-h-screen md:flex  md:justify-between md:px-32 h-full">
        <div className="hero-content  text-left text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Cryptoverse</h1>
            <p className="mb-5">
              Cryptocurrency is a digital currency using cryptography to secure
              transactions. Learn about buying cryptocurrency and cryptocurrency
              scams to look out for.
            </p>
            <a href="/currency" className="btn  text-white">
              Get Started
            </a>
          </div>
        </div>
        <div>
          <img src={coin} alt="" />
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
