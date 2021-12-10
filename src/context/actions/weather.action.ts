import { searchLocation, forewarnWeather } from 'srcRoot/services/WeatherForecast';
import { dispatchAction } from './dispatch';

export const getListLocation = (params: { query: string }) => async (dispatch) => {
  const query = async () => await searchLocation(params);
  await dispatchAction(dispatch, query);
};

export const getWeatherForecast =
  ({}, pathName: string) =>
  async (dispatch) => {
    const query = async () => await forewarnWeather({}, pathName);
    await dispatchAction(dispatch, query);
  };
