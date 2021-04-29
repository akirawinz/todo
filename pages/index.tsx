import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import SearchForm from '@components/searchForm';
import CardList from '@components/cardList';
import axios from 'axios';
import RecentCount from '@components/recentCount';

type Weathers = {
  count: number;
  date: string;
  description: string;
  icon: string;
  id: number;
  name: string;
  temp: number;
  weather: string;
};

export default function Home() {
  const [cardList, setCardList] = useState<Weathers[] | []>([]);
  const [countData, setCountData] = useState<number>(0);

  const searchWeather = async (value: string): Promise<void> => {
    const url =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      value +
      '&appid=2c486a422a8abed95fca0bbd2c35fc80';
    try {
      const { data } = await axios.get(url);
      const newState = countData + 1;
      setCountData(newState);
      const temp = data.main.temp - 273;
      const getJson = await getJsonData(newState, data, temp);
      console.log(getJson);
      let sortData = await [...cardList, getJson].sort(
        (a, b) => b.count - a.count
      );
      setCardList(sortData);
    } catch (error) {
      Swal.fire('City not found');
    }
  };

  const getJsonData = (newState: number, data: any, temp: number): Weathers => {
    return {
      id: Math.floor(Math.random() * 10000) + 1,
      count: newState,
      name: data.name,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      icon:
        'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png',
      temp: temp,
      date: new Date(data.dt * 1000 + data.timezone * 1000).toString(),
    };
  };

  const clearAllData = (): void => {
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
