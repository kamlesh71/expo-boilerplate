import { useEffect, useRef } from 'react';

const useUpdatedEffect = (
  fn: React.EffectCallback,
  deps?: React.DependencyList,
) => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
    } else {
      return fn();
    }
  }, [deps, fn]);
};

export { useUpdatedEffect };
