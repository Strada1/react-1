import { useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import { CurrentForecastTab } from "../CurrentForecastTab/CurrentForecastTab";
import { DetailsForecastTab } from "../DetailsForecastTab/DetailsForecastTab";
import { TimelineForecastTab } from "../TimelineForecastTab/TimelineForecastTab";
import ForecastSectionCss from './ForecastSection.module.css'

const ForecastSection = ({ currentForecast, timeLineForecast, addFavoriteCity, favoriteCities}) => {
  const  [tab, setTab] = useState(1);

  const changeTab = (tabIndex)=> {
    setTab(tabIndex)
  }

  return (
    <section className={ForecastSectionCss.mainForecast}>
      {tab ===1 && <CurrentForecastTab currentForecast={currentForecast} addFavoriteCity={addFavoriteCity} favoriteCities={favoriteCities} tab={tab} />}
      {tab === 2 && <DetailsForecastTab currentForecast={currentForecast}/>}
      {tab === 3 && <TimelineForecastTab currentForecast={currentForecast} timeLineForecast={timeLineForecast} />}
      <Navigation changeTab={changeTab} tab={tab} />
    </section>
  );
};



export { ForecastSection };
