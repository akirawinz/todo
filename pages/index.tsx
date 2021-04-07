import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import SearchForm from "@components/searchForm";
import CardList from "@components/cardList";
import axios from "axios";
import RecentCount from "@components/recentCount";

export default function Home() {
  // const initialData = [
  //   {
  //     id: 1,
  //     name: "London",
  //     weather: "clear",
  //     description: "clear sky",
  //     icon: "http://openweathermap.org/img/w/01d.png",
  //     temp: 29,
  //     date: "Thu Apr 08 2021 01:32:12 GMT+0700",
  //   },
  // ];
  const [cardList, setCardList]: any = useState([]);
  const [countData, setCountData] = useState(0);
  const searchWeather = async (value: string) => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      value +
      "&appid=2c486a422a8abed95fca0bbd2c35fc80";
    await axios
      .get(url)
      .then(({ data }) => {
        const newState = countData + 1;
        setCountData(newState);
        const temp = parseInt(data.main.temp - 273);
        const getJson = {
          id: Math.floor(Math.random() * 10000) + 1,
          count: newState,
          name: data.name,
          weather: data.weather[0].main,
          description: data.weather[0].description,
          icon:
            "http://openweathermap.org/img/wn/" +
            data.weather[0].icon +
            "@2x.png",
          temp: temp,
          date: new Date(data.dt * 1000 + data.timezone * 1000).toString(),
        };
        let sortData = [...cardList, getJson].sort((a, b) => b.count - a.count);
        setCardList(sortData);
      })
      .catch((error) => {
        return Swal.fire("City not found");
      });
  };

  const clearAllData = () => {
    setCountData(0);
    setCardList([]);
  };
  useEffect(() => {
    console.log(cardList);
  }, [cardList]);
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="hero">
          <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
            <h1 className=" font-bold text-3xl text-gray-900">WeatherApp</h1>
            <p className=" font-base text-base text-gray-600">
              Next js & Tailwind
            </p>
          </div>
          <div className="box pt-6">
            <div className="box-wrapper">
              <SearchForm searchWeather={searchWeather} />
            </div>
          </div>

          <RecentCount countData={countData} clearAllData={clearAllData} />
          <CardList cardList={cardList} />
        </div>
      </div>
    </>
  );
}
