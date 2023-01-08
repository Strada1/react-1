import React from 'react';
import Card from '../Card/Card';

function Forecast({ forecast }) {
  return (
    <div id="tab_03" className="tabsBlock">
      <h1>{forecast.city.name}</h1>
      <Card list={forecast.list} city={forecast.city} />
    </div>
  );
}

export default Forecast;
