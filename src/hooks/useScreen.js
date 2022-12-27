import { useState, useEffect } from 'react';

const breakPoint = 1080;

export default function useScreen() {
	const [screenWidth, setScreenWidth] = useState({
		width: window.innerWidth,
		isMobile: false,
		isDesktop: false,
	});

	useEffect(() => {
		function checkScreenWidth() {
			if (window.innerWidth <= breakPoint) {
				return setScreenWidth({
					...screenWidth,
					width: window.innerWidth,
					isDesktop: false,
					isMobile: true,
				});
			}
			return setScreenWidth({
				...screenWidth,
				width: window.innerWidth,
				isDesktop: true,
				isMobile: false,
			});
		}

		window.addEventListener('resize', checkScreenWidth);

		return () => window.removeEventListener('resize', checkScreenWidth);
	});

	return screenWidth;
}
