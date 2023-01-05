import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Animated from "./New/animated routes/Animated.";
import { Routes, Route } from "react-router-dom";
import { Header, News, Currency } from "./New";
import Navbar from "./New/Navbar/Navbar";

const App = () => {
  return (
    <div>
      {/* <div className="page-loader z-999">
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
      </div> */}
      <div className="bg-neutral">
        <div className=" ">
          <Navbar />
        </div>

        <div className="data bg-base-100 drop-shadow-xl ">
          <BrowserRouter>
            <Routes>
              {" "}
              <Route path="currency" element={<Currency />} />
              <Route path="/" element={<Header />} />
              <Route path="news" element={<News />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
