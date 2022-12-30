
import './MainBlock.css'
import Tabsbar from '../Tabsbar/Tabsbar';
import Locationsbar from '../Locationsbar/Locationsbar'


const MainBlock = () => {
    return (
        <div className='weather--main'>
            <Tabsbar />
            <Locationsbar />
        </div>
    )
}
export default MainBlock;
