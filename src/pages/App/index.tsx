import React from 'react';
import WetherForecast from '../WetherForecast';
import { WeatherStore } from 'srcRoot/context/stores';
import Toast from 'srcRoot/components/Toast';

import './style.scss';
import 'srcRoot/static/scss/color.scss';

const App = () => {
  return (
    <>
      <WeatherStore>
        <WetherForecast />
      </WeatherStore>
      <Toast />
    </>
  );
};

export default App;
