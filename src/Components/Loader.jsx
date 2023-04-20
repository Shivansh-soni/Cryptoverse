import React from "react";
import { BallTriangle } from "react-loader-spinner";
const Loader = (props) => {
  return (
    <div
      className={`flex justify-center items-center w-screen h-screen absolute  top-0 left-0 z-50 ${
        props.visible ? "fade-in bg-black z-50" : "fade-out"
      }`}
    >
      <div className="loader text-4xl ">
        <p>loading</p>
        <div className="words">
          <span className="word">Coins</span>
          <span className="word">Markets</span>
          <span className="word">Coins</span>
          <span className="word">News</span>
          <span className="word"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
