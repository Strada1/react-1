import { useState, useEffect } from 'react';
const MAX_MOBILE_BREAKPOINT = 768;

export const useScreen = () => {
  const documentBody = document.documentElement;

  const [windowWidth, setWindowWidth] = useState(documentBody.clientWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(documentBody.clientWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return {
    width: windowWidth,
    isMobile: windowWidth < MAX_MOBILE_BREAKPOINT,
    isDesktop: windowWidth >= MAX_MOBILE_BREAKPOINT
  };
};
