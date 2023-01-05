import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header, News, Currency } from "../";

import { AnimatePresence } from "framer-motion";

function Animated() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes
          location={location}
          key={location.pathname}
          initial={false}
          mode={"wait"}
        >
          <Route path="/currency" element={<Currency />} />
          <Route path="/" element={<Header />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Animated;
