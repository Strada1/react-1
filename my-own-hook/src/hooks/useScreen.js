import {useState, useEffect} from "react";

function useScreen(widthScreen) {
  const maxScreenWidth = 992;
  let screenWidth = widthScreen;
  let isMobile = false;
  let isDesktop = true;
  const [currentScreenWidth, setCurrentScreenWidth] = useState(screenWidth);
  function reportWindowSize() {
    setCurrentScreenWidth(window.innerWidth);
  }
  useEffect(() => { 
    window.addEventListener("resize", reportWindowSize)
  }, [currentScreenWidth])
  screenWidth = currentScreenWidth;
  if(screenWidth < maxScreenWidth) {
    isMobile = true;
    isDesktop = false;
  }
  return {screenWidth, isMobile, isDesktop};
}

export default useScreen
