import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Loader from "./Loader";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
const MobileNav = () => {
  return (
    <div className="">
      <div className="main__bg mt-2 drop-shadow-2xl glass flex flex-col items-center">
        <ul className="font-medium flex flex-col justify-center items-end gap-5 p-5 w-full">
          <li>
            <Link
              href="/#"
              className="btn glass text-white border-none  hover:drop-shadow-2xl w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/currency"
              className="btn glass text-white border-none  hover:drop-shadow-2xl w-full"
            >
              Currency
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className="btn glass text-white border-none  hover:drop-shadow-2xl w-full"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className="btn glass text-white border-none  hover:drop-shadow-2xl w-full"
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
  const router = useRouter();
  const [ismobile, setIsMobile] = useState(false);
  const [link, setLink] = useState("false");
  const [loader, setLoader] = useState(true);

  const handleCheckboxChange = () => {
    setIsMobile(!ismobile);
  };

  const handleLinkChange = (e) => {
    setLoader(true);
    setLink(Math.random());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [link]);

  return (
    <nav className="px-2 p-2">
      <div className="flex items-center justify-between ">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/#")}
        >
          <Image src={logo} width={40} alt="" />
          <p className="font-semibold text-2xl text-white">Cryptoverse</p>
        </div>

        <div className=" lg:flex max-w-md items-center gap-5 hidden text-white">
          <Link href="/" onClick={handleLinkChange}>
            <p className="font-semibold ">Home</p>
          </Link>

          <Link href="/currency" onClick={handleLinkChange}>
            <p className="font-semibold ">Currency</p>
          </Link>

          <Link href="/news" onClick={(e) => {}}>
            <p className="font-semibold ">News</p>
          </Link>

          <Link
            href="https://shivanshsoni.in/"
            className=" "
            onClick={(e) => setLink(e.target.value)}
          >
            <p className="font-semibold ">About Me</p>
          </Link>
        </div>
        <>
          <label className="btn btn-circle  glass swap swap-rotate lg:hidden  ">
            <input type="checkbox" onClick={handleCheckboxChange} />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="28"
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
        </>
      </div>

      <Loader visible={loader} />
      {ismobile && <MobileNav />}
    </nav>
  );
}

export default Navbar;
