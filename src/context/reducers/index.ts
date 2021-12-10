import { SERVICES_STATUS } from 'srcRoot/utils/constants';

const reducer = (state, action) => {
  switch (action.type) {
    case SERVICES_STATUS['LOADING']:
      return { loading: true, data: null, error: null };
    case SERVICES_STATUS['UPDATE']:
      return { loading: false, data: action.data, error: null };
    case SERVICES_STATUS['FAIL']:
      return { loading: false, data: null, error: action.error };
    default:
      return state;
  }
};

export { reducer };
