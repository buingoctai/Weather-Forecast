import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import EmptyForecast from 'srcRoot/pages/WetherForecast/components/list-forecast/components/empty-forecast';

let emptyElement: RenderResult;
describe('Testing <EmptyForecast/>', () => {
  beforeEach(() => {
    emptyElement = render(<EmptyForecast />);
  });

  it('Matches snapshot', () => {
    const { baseElement } = emptyElement;
    expect(baseElement).toMatchSnapshot();
  });
});
