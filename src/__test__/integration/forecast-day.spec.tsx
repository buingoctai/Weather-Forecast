import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import ForecastDay from 'srcRoot/pages/WetherForecast/components/list-forecast/components/forecast-day';
import dayMock from '../mock/dayMock';
import { getDayOfWeek } from 'srcRoot/utils';

let forecastElement: RenderResult;

describe('Testing <Search/>', () => {
  beforeEach(() => {
    forecastElement = render(<ForecastDay day={dayMock} />);
  });

  it('Get exist forecast day with day of week title', () => {
    const text = getDayOfWeek(dayMock.applicable_date);
    expect(forecastElement.getByText(text)).toBeInTheDocument();
  });
});
