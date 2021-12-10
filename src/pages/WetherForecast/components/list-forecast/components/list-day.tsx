import React from 'react';
import SkeletonDay, { skeletonData } from './skeleton-day';
import ForecastDay from './forecast-day';
import { OneDay } from 'srcRoot/enitities/weather-forecast';
import EmptyForecast from './empty-forecast';

interface Props {
  isLoading?: boolean;
  enableSkeleton?: boolean;
  days: Array<OneDay>;
}
const ListDay = (props: Props) => {
  const { isLoading, enableSkeleton, days } = props;

  if (isLoading && enableSkeleton) {
    return (
      <div className="flx-center list-forecast">
        {skeletonData.map((_, idx) => (
          <SkeletonDay key={idx} />
        ))}
      </div>
    );
  }
  if (days.length > 0) {
    return (
      <div className="flx-center list-forecast">
        {days.map((d, idx) => (
          <ForecastDay day={d} key={idx} />
        ))}
      </div>
    );
  }

  if (days.length === 0) return <EmptyForecast />;

  return null;
};

export default React.memo(ListDay);
