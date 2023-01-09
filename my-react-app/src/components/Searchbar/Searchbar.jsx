import './Searchbar.css'
import { useState } from 'react'
import SearchInput from '../SearchInput/SearchInput';
import SearchButton from '../SearchButton/SearchButton'

const Searchbar = ({searchCityHandler}) => {

     const [text, setText] = useState('');



      const changeInputHandler = (event) => {
        const searchCity = event.target.value;
        setText(searchCity)
    }


    return (
        <div className="weather--searchbar">
            <form
                className="weather--searchform"
                onSubmit={(event) => searchCityHandler(event, text)}
            >
                <SearchInput
                    value={text}
                    onChange = {(event) => changeInputHandler(event)}
                />
                <SearchButton />
            </form>
        </div>

    )
}
export default Searchbar;
