import './Searchbar.css'
import SearchInput from '../SearchInput/SearchInput';
import SearchButton from '../SearchButton/SearchButton'

const Searchbar = () => {
    return (
        <div className="weather--searchbar">
            <form className="weather--searchform">
                <SearchInput />
                <SearchButton />
            </form>
        </div>

    )
}
export default Searchbar;
