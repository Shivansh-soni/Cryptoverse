import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Lottie from "lottie-web";
import animationData from "../assets/bitcoin.json";
import Link from "next/link";
import Loader from "@/Components/Loader";

function Header() {
  const containerRef = useRef();
  useEffect(() => {
    Lottie.loadAnimation({
      container: containerRef.current, // Element where the animation will be rendered
      renderer: "svg", // Choose the renderer: 'svg', 'canvas', 'html'
      loop: true, // Whether the animation should loop
      autoplay: true, // Whether the animation should start automatically
      animationData, // The JSON animation data
    });
  }, []);
  return (
    <div className="main__bg ">
      <Head>
        <title>Cryptoverse</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is my page description." />
      </Head>
      <div className="hero min-h-screen pt-5 md:pt-0 flex flex-col items-center justify-center  md:flex-row   md:justify-between md:px-32 h-full">
        <div className="hero-content  text-left text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Cryptoverse</h1>
            <p className="mb-5">
              Cryptoverse provides real-time cryptocurrency data and statistics,
              including prices, market cap, and trading volume for popular
              cryptocurrencies. It includes interactive charts and graphs, so
              you can make informed investment decisions.
            </p>
            <Link href="/currency" className="btn  text-white glass">
              Get Started
            </Link>
          </div>
        </div>
        <div className="lg:w-6/12">
          <div ref={containerRef} />
        </div>
      </div>
    </div>
  );
}

export default Header;
