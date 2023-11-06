import { useCallback, useEffect } from 'react';

export const useDebounce = (
  func: () => void,
  delay: number,
  dependency: string[]
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callbackFunc = useCallback(func, [...dependency]);

  useEffect(() => {
    const timer = setTimeout(() => {
      callbackFunc();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callbackFunc, delay]);
};
