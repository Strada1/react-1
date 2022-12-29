import { LocationList } from "../LocationList/LocationList"
import './FavoriteLocations.css'

const FavoriteLocations = ({favoriteCities, getForecast,  deleteFavoriteCity})=> {
  
    return (<section class="main-locations">
    <div className="locations-header">
      <p className="text-locations">Added Locations:</p>
    </div>
    <LocationList favoriteCities={favoriteCities} getForecast={getForecast} deleteFavoriteCity={deleteFavoriteCity}/>
  </section>)
}

export {FavoriteLocations}