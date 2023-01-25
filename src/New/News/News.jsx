import React, { useEffect, useState } from "react";
import "../Compstyle.css";
import { motion } from "framer-motion";
import Framer from "../framer/Framer";

const options = {
  method: "GET",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "d06909e8bdmsh3ffd7c96efa518dp15b850jsn4c7a7ef81e8f",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

const url =
  "https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day";

const News = () => {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const response = await fetch(url, options);
    const tempNews = await response.json();
    const news = tempNews.value;
    setNews(news);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <motion.div
        className="news-container -z-1 main__bg"
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
        <div className="mb-10">{/* <Navbar /> */}</div>
        
        <div className="news-grid px-5 ">
          {news.map((crypto) => {
           
            const { name, description, url, datePublished } = crypto;

           

            //  console.log(image.thumbnail.contentUrl);
            return (
              <div
                className="news-items text-blue-900 card__hover-bg hover:text-white drop-shadow-2xl bg-base-100 rounded-xl scale-75 md:scale-95 hover:scale-100 md:hover:scale-125 ease-in-out duration-300 text-blue-900"
                key={datePublished}
              >
                <a target="_blank" rel="noreferrer" href={url}>
                  <div className="aboveline">
                    <p className="cryptoheadline ">{name}</p>
                    {/* <img src={image.thumbnail.contentUrl} /> */}
                  </div>
                  <div className="news-desc ">
                    <p>{description}</p>
                  </div>{" "}
                </a>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default News;
