import React from "react";
import { BallTriangle } from "react-loader-spinner";
const Loader = (props) => {
  return (
    <div
      className={`absolute top-0 w-screen h-screen -ml-2 flex items-center justify-center opacity-70
      ${props.visible ? "bg-black z-50" : "fade-out"} `}
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
