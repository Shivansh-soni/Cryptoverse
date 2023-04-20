import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";

export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "d06909e8bdmsh3ffd7c96efa518dp15b850jsn4c7a7ef81e8f",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };
  const response = await fetch(
    "https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day",
    options
  );
  const tempNews = await response.json();
  const news = tempNews.value;

  return {
    props: {
      news: news,
    },
  };
}

const News = ({ news }) => {
  return (
    <>
      <div className="px-2 main__bg p-2">
        <Navbar />
      </div>
      <div className="news-container -z-1 main__bg fade-in">
        <div className="news-grid px-5 ">
          {news?.map((crypto) => {
            const { name, description, url, datePublished } = crypto;
            return (
              <div
                className="news-items bg-accent text-secondary hover:text-white  hover:glass drop-shadow-2xl rounded-xl scale-75 md:scale-95 hover:scale-100 md:hover:scale-110 ease-in-out duration-300"
                key={datePublished}
              >
                <a target="_blank" rel="noreferrer" href={url}>
                  <div className="aboveline">
                    <p className="cryptoheadline ">{name}</p>
                    {/* <Image
                      alt=""
                      src={crypto.image.thumbnail.contentUrl}
                      width={100}
                      height={100}
                    /> */}
                  </div>
                  <div className="news-desc ">
                    <p>{description}</p>
                  </div>{" "}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
