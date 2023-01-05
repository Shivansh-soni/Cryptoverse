import React from "react";
import "./Navbar.css";
import logo from "../../logo.png";

function Navbar() {
  return (
    <div className="">
      <div className="navbar main__bg text-white font-semibold bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  className="text-black"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  CREE
                  {/* <Link to="/currency">About</Link> */}
                </button>
              </li>
              <li tabIndex={0}>
                <button
                  href="/currency"
                  className="justify-between text-black"
                  onClick={() => {
                    window.location.href = "/currency";
                  }}
                >
                  Currency
                </button>
              </li>
              <li>
                <button
                  className="text-black"
                  onClick={() => {
                    window.location.href = "/news";
                  }}
                >
                  News
                </button>
              </li>
            </ul>
          </div>
          <a
            href="/#"
            className="btn btn-ghost text-white normal-case md:text-2xl"
          >
            <img src={logo} alt="logo" className="w-10 mr-2" />
            Cryptoverse
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:flex">
            <li>
              <a href="/#">Home</a>
            </li>
            <li tabIndex={0}>
              <a href="/currency">Currency</a>
            </li>
            <li>
              <a href="/news">Crypto News</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://www.shivanshsoni.com/ "
            className="btn hidden md:flex"
          >
            Made with ❤️ by Shivansh Soni
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
