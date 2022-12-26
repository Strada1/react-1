import './App.css';
import { useScreen } from './useScreen';

function App() {
    const { width, isMobile, isDesktop } = useScreen();
    return (
        <div className="">
            <div className="">Screen width - {width}</div>
            <div className="">isMobile - {isMobile}</div>
            <div className="">isDesktop - {isDesktop}</div>
        </div>
    );
}

export default App;
