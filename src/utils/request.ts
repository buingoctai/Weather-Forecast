import axios from 'axios';
import { ParamsRequest } from './data-types';
import {TIMEOUT_REQUEST} from './constants';

const request = (url: string, options: ParamsRequest) => {
  switch (options.method) {
    case 'GET':
      return axios.get(url, { params: { ...options.data } });
    case 'POST':
      return axios({
        url,
        ...options,
      });

    default:
      return;
  }
};

const HandleStatus = (response) => {
  const { status, data } = response;
  if (status === 200 || status === 201 || status === 201) {
    return data;
  } else {
    throw JSON.parse(data);
  }
};
axios.interceptors.request.use((config) => {
  return {...config, timeout: TIMEOUT_REQUEST};
});

axios.interceptors.response.use(
  (response) => {
    return HandleStatus(response);
  },
  (error) => {
    const {
      response: { status, data },
    } = error;
    return HandleStatus({ status: status, data: JSON.stringify(data) });
  }
);

export { request };
