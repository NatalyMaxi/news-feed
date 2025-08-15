import { useState, useEffect } from 'react';

export const useWindowHeight = (): number => {
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return height;
};
