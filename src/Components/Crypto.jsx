import React from "react";
import dynamic from "next/dynamic";
// const Navbar = dynamic(() => import("./Navbar"), {
//   loading: () => <div>Loading...</div>,
// });

const Crypto = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Crypto;
