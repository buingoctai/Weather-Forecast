import { useCallback, useRef } from 'react';
import { DELAY_CALL_SEARCH } from 'srcRoot/utils/constants';

interface Props {
  callback: (e: any) => any;
}
const useDebounceSearch = (props: Props) => {
  const { callback } = props;
  const delayRef = useRef(null);

  const onChangeTextSeach = useCallback(
    (e) => {
      clearTimeout(delayRef.current);
      delayRef.current = setTimeout(() => {
        callback(e);
      }, DELAY_CALL_SEARCH);
    },
    [callback]
  );

  return {
    onChangeTextSeach,
  };
};

export default useDebounceSearch;
