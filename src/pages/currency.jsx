import React, { useEffect, useState } from "react";
import millify from "millify";

import { BsCurrencyBitcoin } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import dynamic from "next/dynamic";
import Loader from "../Components/Loader";
const Navbar = dynamic(() => import("../Components/Navbar"), {
  loading: () => <div>Loading...</div>,
});

export async function getServerSideProps() {
  const url =
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d06909e8bdmsh3ffd7c96efa518dp15b850jsn4c7a7ef81e8f",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const tempcoins = await response.json();
  const stats = tempcoins.data.stats;
  const coins = tempcoins.data.coins;
  return {
    props: {
      coins: coins,
      stats: stats,
    },
  };
}

function Currency({ coins, stats }) {
  // const [loader, setLoader] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoader(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <>
      <Navbar />
      <div className="currency__bg fade-in">
        <div className="shadow flex flex-col lg:flex-row flex-wrap currency__bg text-white">
          <div className="stat w-2/12">
            <div className="stat-figure text-primary">
              <BsCurrencyBitcoin className="text-5xl" />
            </div>
            <div className="text-white stat-title">Total CryptoCurrencies</div>
            <div className=" stat-value text-primary">{stats.totalCoins}</div>
            <div className="text-white stat-desc">21% more than last month</div>
          </div>
          <div className="stat w-2/12">
            <div className="stat-figure text-secondary">
              <AiOutlineShoppingCart className="text-4xl" />
            </div>
            <div className="text-white stat-title">Total Markets</div>
            <div className="stat-value text-secondary">80K</div>
            <div className="text-white stat-desc">21% more than last month</div>
          </div>{" "}
        </div>

        <div className="currency-container currency__bg mt-20 drop-shadow-xl  text-neutral bg-base-100">
          <div className="grid">
            {coins.map((obj) => {
              const { uuid, name, iconUrl, btcPrice, marketCap, change } = obj;
              console.log("uuid");
              return (
                <div
                  className="items drop-shadow-2xl color-grad rounded-lg  card__hover-bg hover:text-white  scale-95 md:scale-95 hover:scale-125  md:hover:scale-125 ease-in-out duration-300 "
                  key={uuid}
                >
                  <div className="aboveline">
                    <p className="rank-name">{name}</p>
                    <Image
                      className="icon"
                      src={iconUrl}
                      alt=""
                      width={44}
                      height={44}
                    />
                  </div>
                  <hr />
                  <div className="data">
                    <p>Price : {millify(btcPrice)}</p>
                    <p>Market Cap : {millify(marketCap)}</p>
                    <p>Daily Change : {change}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Loader visible={loader} /> */}
    </>
  );
}

export default Currency;
