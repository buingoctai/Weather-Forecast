import React from 'react';
import { OneDay } from 'srcRoot/enitities/weather-forecast';
import { getDayOfWeek } from 'srcRoot/utils';

interface Props {
  day: OneDay;
}
const ForecastDay = (props: Props) => {
  const { day } = props;

  return (
    <div className="forecast-day flx-center flx-col">
      <h4>{getDayOfWeek(day.applicable_date)}</h4>
      <span>{Math.floor(day.min_temp)}</span>
      <span>{Math.floor(day.max_temp)}</span>
    </div>
  );
};

export default React.memo(ForecastDay);
