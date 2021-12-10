import React, { createContext, useMemo, useReducer } from 'react';
import { getListLocation, getWeatherForecast } from '../actions';
import { reducer } from '../reducers';
import { WeatherState } from 'srcRoot/enitities/weather-forecast';

const initialListLocation = {};
const initialWeatherForecast = {};
export const WeatherContext = createContext(initialListLocation);

const WeatherStore = ({ children }) => {
  const [listLocation, listLocationDispatch] = useReducer(reducer, initialListLocation);
  const [weatherForecast, weatherForecastDispatch] = useReducer(reducer, initialWeatherForecast);

  const weatherActions = {
    setListLocation: (list: Array<object>) => {
      listLocationDispatch({ type: 'UPDATE', data: list });
    },
    getListLocation: async (params: { query: string }) => {
      await getListLocation(params)(listLocationDispatch);
    },
    getWeatherForecast: async (pathName: string) => {
      await getWeatherForecast({}, pathName)(weatherForecastDispatch);
    },
  };

  const value: WeatherState = {
    listLocation,
    weatherForecast,
    weatherActions,
  };

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};

export default WeatherStore;
