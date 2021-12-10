import { SERVICES_STATUS } from 'srcRoot/utils/constants';
import { ToastManager, TOAST_TYPE } from 'srcRoot/components/Toast';

const dispatchAction = async (dispatch, query) => {
  dispatch({ type: SERVICES_STATUS['LOADING'], data: null, error: null });
  try {
    const data = await query();
    dispatch({ type: SERVICES_STATUS['UPDATE'], data: data, error: null });
  } catch (error) {
    ToastManager.show({
      text: `Have error in the process of fetching data ${error}.`,
      type: TOAST_TYPE.ERROR,
      noBackground: true,
      duration: 5000,
    });
    dispatch({ type: SERVICES_STATUS['FAIL'], data: null, error });
  }
};

export { dispatchAction };
