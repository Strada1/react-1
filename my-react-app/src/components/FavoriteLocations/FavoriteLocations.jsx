import { LocationList } from "../LocationList/LocationList"
import './FavoriteLocations.css'

const FavoriteLocations = ({favoriteCities,  deleteFavoriteCity})=> {
  
    return (<section class="main-locations">
    <div className="locations-header">
      <p className="text-locations">Added Locations:</p>
    </div>
    <LocationList favoriteCities={favoriteCities} deleteFavoriteCity={deleteFavoriteCity}/>
  </section>)
}

export {FavoriteLocations}