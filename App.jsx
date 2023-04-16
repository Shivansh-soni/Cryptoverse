import React from "react";
import Link from "next/link";
import Navbar from "./New/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <div className="bg-neutral">
        <div className=" ">
          <Navbar />
        </div>

        <div className="data bg-base-100 drop-shadow-xl "></div>
      </div>
    </div>
  );
};

export default App;
