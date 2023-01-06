import { LocationList } from "../LocationList/LocationList"
import FavoriteLocationsCss from './FavoriteLocations.module.css'

const FavoriteLocations = ({favoriteCities,  deleteFavoriteCity})=> {
  
    return (<section class={FavoriteLocationsCss.mainLocations}>
    <div className={FavoriteLocationsCss.locationsHeader}>
      <p className={FavoriteLocationsCss.textLocations}>Added Locations:</p>
    </div>
    <LocationList favoriteCities={favoriteCities} deleteFavoriteCity={deleteFavoriteCity}/>
  </section>)
}

export {FavoriteLocations}