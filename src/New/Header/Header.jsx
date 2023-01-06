import React from "react";

import a2 from "../../assets/a2.png";

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
      <div className="page-loader z-999">
        <div className="back-loader">
          <div className="building-blocks">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen pt-5 md:pt-0 flex flex-col items-center justify-center  md:flex-row   md:justify-between md:px-32 h-full">
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
        <div className="relative right-12  md:right-0">
          <img src={a2} alt="" />
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
