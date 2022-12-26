import { useState } from 'react';

function useScreen() {
    const defaultWidthMobile = 1080;

    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const [isMobile, setIsMobile] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

	window.onload = function() {
		if (screenWidth <= defaultWidthMobile) {
			setIsMobile(true);
		} else {
			setIsDesktop(true);
		}
	}
   
    // console.log(' isDesktop: ', isDesktop);
    // console.log('isMobile: ', isMobile);
    // console.log('screenWidth: ', screenWidth);
	const result =[screenWidth, isMobile, isDesktop]
    return result;
}

export { useScreen };
