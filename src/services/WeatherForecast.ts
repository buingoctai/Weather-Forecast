import { request } from 'srcRoot/utils/request';

export const searchLocation = (params: object, pathName = '') => {
  return request(`${process.env.API_ENPOINT}/search/${pathName}`, {
    method: 'GET',
    data: params,
  });
};

export const forewarnWeather = (params: object, pathName = '') => {
  return request(`${process.env.API_ENPOINT}/${pathName}`, {
    method: 'GET',
    data: params,
  });
};
