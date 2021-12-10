import React, { useEffect, useRef, useContext } from 'react';
import SearchLocation from './components/search-location';
import ListForecast from './components/list-forecast';
import './style.scss';

const WetherForecast = () => {
  return (
    <div className="wf-container">
      <SearchLocation />
      <ListForecast />
    </div>
  );
};

export default WetherForecast;
