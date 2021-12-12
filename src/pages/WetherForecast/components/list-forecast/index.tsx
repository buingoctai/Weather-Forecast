import React, { useContext } from 'react';
import { WeatherContext } from 'srcRoot/context/stores/WeatherStore';
import { WeatherState } from 'srcRoot/enitities/weather-forecast';
import ListDay from './components/list-day';
import EmptyForecast from './components/empty-forecast';

import './style.scss';

const ListForecast = () => {
  const {
    weatherForecast: { loading, data, error },
  }: WeatherState = useContext(WeatherContext);
  if (!loading && !data && !error) return <EmptyForecast />;

  return <ListDay isLoading={loading} enableSkeleton days={data?.consolidated_weather || []} />;
};

export default React.memo(ListForecast);
