import { useState } from 'react'

function Search(props) {
    const [city, setCity] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        props.handleSubmit(city);
        setCity('');
    }

    return (
        <div className="search">
            <form onSubmit={onSubmit} autoComplete="false">
                <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder="City" />
                <button type="submit">
                    <i className="fa fa-magnifying-glass" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    )
}

export default Search