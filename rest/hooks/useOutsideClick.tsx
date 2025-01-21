'use client';

import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback: any) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [ref]);

  return ref;
};

export default useOutsideClick;
