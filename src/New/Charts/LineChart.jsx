import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const url = "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history/";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d06909e8bdmsh3ffd7c96efa518dp15b850jsn4c7a7ef81e8f",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const LineChart = () => {
  const [data, setData] = useState();
  const [history, setHistory] = useState([]);

  const getCoins = async () => {
    const response = await fetch(url, options);
    const tempcoins = await response.json();
    console.log(tempcoins.data);
    setData(tempcoins.data);
    setHistory(tempcoins.data.history);
  };
  useEffect(() => {
    getCoins();
  }, []);

  console.log("DATA", history);
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < history.length; i += 1) {
    coinPrice.push(history[i].price);
    coinTimestamp.push(new Date(data.history[i].timestamp).toLocaleDateString);
  }

  const linedata = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="chart-header">
        <h2>BITCOIN PRICE CHART</h2>
        <div className="price-container">{/* <h2>{data.change}%</h2> */}</div>
      </div>
      <Line data={linedata} options={options}></Line>
    </>
  );
};

export default LineChart;
