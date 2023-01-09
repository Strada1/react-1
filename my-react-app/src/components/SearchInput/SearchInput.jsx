import './SearchInput.css'



const SearchInput = ({value, onChange}) => {





    return (
        <input
            type="text"
            className='weather--searchinput'
            placeholder="New York"
            value={value}
            onChange={onChange}
        />

    )
}
export default SearchInput;
