import { useState, useEffect } from 'react';

function useScreen() {
  const [deviceSize, setDeviceSize] = useState({
    width: document.documentElement.clientWidth,
    isMobile: true,
    isDesctop: false,
  });

  useEffect(() => {
    const isDesctopMedia = window.matchMedia('(max-width: 1020px)');
    function checkDeviceSize() {
      isDesctopMedia.matches
        ? setDeviceSize((deviceSize) => ({
            ...deviceSize,
            width: document.documentElement.clientWidth,
            isMobile: true,
            isDesctop: false,
          }))
        : setDeviceSize((deviceSize) => ({
            ...deviceSize,
            width: document.documentElement.clientWidth,
            isMobile: false,
            isDesctop: true,
          }));
    }

    window.addEventListener('resize', checkDeviceSize);
    return () => window.removeEventListener('resize', checkDeviceSize);
  });

  return deviceSize;
}

export default useScreen;
