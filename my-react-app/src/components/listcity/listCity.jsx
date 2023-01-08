import { CityItem } from "./cityItem";

export function ListCity({ listCities }) {
    return(
        <div className="locations">
            <div className="title">
                <h1>Added Locations:</h1>
            </div>
            <ul className="list">
                {listCities.map((city) => (
                    <CityItem key={Math.random()} nameCity={city} />
                    ))}
            </ul>
        </div>
    )
}