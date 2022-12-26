import { useState, useEffect } from "react";

function useScreen() {
    const [deviceSize, setDeviceSize] = useState({width: document.documentElement.clientWidth, isMobile: false, isDesktop: false});
    
      useEffect(() => {
    const isDesktopMedia = window.matchMedia('(max-width: 1020px)');
    
    function checkDeviseSize() {
      isDesktopMedia.matches? setDeviceSize(deviceSize => ({...deviceSize, width: document.documentElement.clientWidth, isMobile: true, isDesktop: false})) : setDeviceSize(deviceSize => ({...deviceSize, width: document.documentElement.clientWidth, isMobile: false, isDesktop: true}))
    }
    window.addEventListener("resize", checkDeviseSize);
    
    return () => window.removeEventListener("resize", checkDeviseSize);
      })
    
      return deviceSize;
    }

    export {useScreen}