import { useEffect, useRef } from 'react';

const useMountedEffect = (fn: React.EffectCallback) => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return fn();
    }
  }, [fn]);
};

export { useMountedEffect };
