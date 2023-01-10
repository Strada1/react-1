/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
function FavoriteCity({ favoriteCities, removeFavorite, refreshRequest }) {
    return (
        <div>
            <li>
                <p onClick={(e) => refreshRequest(e, favoriteCities.city)}>
                    {favoriteCities.city}
                </p>
                <button onClick={() => removeFavorite(favoriteCities.id)}>
                    X
                </button>
            </li>
        </div>
    )
}

export { FavoriteCity }
