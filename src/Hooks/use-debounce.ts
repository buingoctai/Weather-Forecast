import { useRef } from 'react';

export default function useDebounce() {
  const _onDelayChange = (callback: (param?: any) => any, delay = 2000) => {
    const timeoutRef = useRef(null); /// dùng nay loi hook in hook
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      callback();
    }, delay);
  };

  return {
    onDelayChange: _onDelayChange,
  };
}
