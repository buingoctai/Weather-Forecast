import React, { useContext } from 'react';
import SearchLocation from './components/search-location';
import ListForecast from './components/list-forecast';
import { WeatherContext } from 'srcRoot/context/stores/WeatherStore';
import { WeatherState } from 'srcRoot/enitities/weather-forecast';
import './style.scss';

const WetherForecast = () => {
  const { weatherForecast, listLocation, weatherActions }: WeatherState =
    useContext(WeatherContext);


  return (
    <div className="wf-container">
      <SearchLocation listLocation={listLocation} weatherActions={weatherActions} />
      <ListForecast weatherForecast={weatherForecast} />
    </div>
  );
};

export default WetherForecast;
