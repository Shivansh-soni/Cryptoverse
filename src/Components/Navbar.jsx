import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Loader from "./Loader";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="">
      <div className="main__bg drop-shadow-2xl glass  flex flex-col items-end">
        <ul className="font-medium flex flex-col justify-end items-end gap-5 p-5 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
          <li>
            <Link
              href="/#"
              className="btn glass text-white border-none  hover:drop-shadow-2xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/currency"
              className="btn glass text-white border-none  hover:drop-shadow-2xl"
            >
              Currency
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className="btn glass text-white border-none  hover:drop-shadow-2xl"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className="btn glass text-white border-none  hover:drop-shadow-2xl"
            >
              Visit Developer
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

function Navbar() {
  const [ismobile, setIsMobile] = useState(false);
  const [link, setLink] = useState("false");
  const [loader, setLoader] = useState(true);

  const handleCheckboxChange = () => {
    setIsMobile(!ismobile);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [link]);

  return (
    <nav className="main__bg w-full z-50">
      <div className="flex items-center w-full lg:justify-between lg:ml-20 px-4  py-4">
        <div className="w-full">
          <Link
            href="/#"
            className="flex items-center"
            onClick={() => {
              setLink("home");
            }}
          >
            <Image src={logo} width={40} alt="" />
            <span className="self-center ml-4 text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cryptoverse
            </span>
          </Link>
        </div>
        <label className="btn btn-circle swap swap-rotate lg:hidden ">
          <input
            type="checkbox"
            checked={ismobile}
            onChange={handleCheckboxChange}
            className="invisible"
          />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <div className="w-full  hidden lg:block" id="navbar-default">
          <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
                onClick={() => {
                  setLink("home");
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/currency"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => {
                  setLink("Currency");
                }}
              >
                Currency
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => {
                  setLink("news");
                }}
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="https://shivanshsoni.in/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Visit Developer
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Loader visible={loader} />
      {ismobile && <MobileNav />}
    </nav>
  );
}

export default Navbar;

export const NavbarSSR = () => {
  return <div>Loading...</div>;
};
