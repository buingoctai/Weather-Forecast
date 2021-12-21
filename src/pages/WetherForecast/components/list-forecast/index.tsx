import React from 'react';
import ListDay from './components/list-day';
import EmptyForecast from './components/empty-forecast';
import { WeatherForecastState } from 'srcRoot/enitities/weather-forecast';
import LogSytem from 'srcRoot/utils/log-system';

import './style.scss';

interface Props {
  weatherForecast: WeatherForecastState;
}
const ListForecast = (props: Props) => {
  LogSytem.log('Re-render: [List-Forecast]');
  const {
    weatherForecast: { loading, data, error },
  } = props;
  if (!loading && !data && !error) return <EmptyForecast />;

  return <ListDay isLoading={loading} enableSkeleton days={data?.consolidated_weather || []} />;
};

export default React.memo(ListForecast);
