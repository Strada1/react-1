import { FavoriteCity } from './FavoriteCity'

function FavoriteLocations({ favoriteCity, removeCity, refreshRequest }) {
    return (
        <section className="main-locations">
            <div className="locations-header">
                <p className="text-locations">Added Locations:</p>
            </div>
            <ul className="locations-items">
                {favoriteCity
                    ? favoriteCity.map((favoriteCity) => (
                          <FavoriteCity
                              refreshRequest={refreshRequest}
                              favoriteCities={favoriteCity}
                              removeFavorite={removeCity}
                              key={favoriteCity.id}
                          />
                      ))
                    : null}
            </ul>
        </section>
    )
}

export { FavoriteLocations }
