import React, { useEffect, useState } from "react";
import "../Compstyle.css";
import "../Loader.css";
import millify from "millify";
import Framer from "../framer/Framer"
import { BsCurrencyBitcoin } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";


const url =
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d06909e8bdmsh3ffd7c96efa518dp15b850jsn4c7a7ef81e8f",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

function Currency() {
  const [coins, setCoins] = useState([]);
  const [stats, setStats] = useState([]);
  

  const getCoins = async () => {
    const response = await fetch(url, options);
    const tempcoins = await response.json();
    
    console.log(tempcoins)
    const stats = tempcoins.data.stats;
    const coins = tempcoins.data.coins;

    setCoins(coins);
    setStats(stats);
    setLoad(true);

  };

  useEffect(() => {
    getCoins();

  }, []);

  return (
    <>
      <motion.div
        className="currency__bg"
        initial={{ opacity: "0%" }}
        animate={{ opacity: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{
          opacity: "1",
        }}
      >
        
        <div className="page-loader z-999">
          <div className="back-loader">
            <div
              className=""
              style={{
                position: "absolute",
                top: "50%",
                left: "55%",
                transform: "translate(-50%, -50%)",
              }}
            >

              <Framer />
            </div>
          </div>
        </div>
        {/* <Navbar /> */}
        <div className="shadow flex flex-col lg:flex-row flex-wrap currency__bg text-white">
          <div className="stat w-2/12">
            <div className="stat-figure text-primary">
              <BsCurrencyBitcoin className="text-5xl" />
            </div>
            <div className="stat-title">Total CryptoCurrencies</div>
            <div className="stat-value text-primary">{stats.totalCoins}</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          <div className="stat w-2/12">
            <div className="stat-figure text-secondary">
              <AiOutlineShoppingCart className="text-4xl" />
            </div>
            <div className="stat-title">Total Markets</div>
            <div className="stat-value text-secondary">80K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>{" "}
        </div>

        <div className="currency-container currency__bg mt-20 drop-shadow-xl  text-neutral bg-base-100">
          <div className="grid">
            {coins.map((obj) => {
              const { uuid, name, iconUrl, btcPrice, marketCap, change } = obj;
              console.log("uuid");
              return (
                <div
                  className="items drop-shadow-2xl text-blue-900 rounded-lg  card__hover-bg hover:text-white  scale-95 md:scale-95 hover:scale-125  md:hover:scale-125 ease-in-out duration-300 "
                  key={uuid}
                >
                  <div className="aboveline">
                    <p className="rank-name">{name}</p>
                    <img className="icon" src={iconUrl} alt="" />
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
      </motion.div>
    </>
  );
}

export default Currency;
