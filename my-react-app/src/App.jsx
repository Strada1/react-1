import './App.css';
import { useScreen } from './useScreen';

function App() {
    const { screenWidth, isMobile, isDesktop } = useScreen();

    return (
        <div className="">
            <div className="">Screen width - {screenWidth}</div>
            <div className="">isMobile - {isMobile ? 'true' : 'false'}</div>
            <div className="">isDesktop - {isDesktop ? 'true' : 'false'}</div>
        </div>
    );
}

export default App;
