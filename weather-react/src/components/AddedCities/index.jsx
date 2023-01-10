import React from 'react';
import AddedCity from '../AddedCity';
import classes from './index.module.css';

const DEFAULT_ADDED_CITIES_MESSAGE = 'No added cities';

const AddedCities = ({items, deleteCity, chooseCity}) => {
  return (
    <div className={classes.mainWrapper}>
      <h2 className={classes.title}>Added cities:</h2>

      <div className={classes.citiesWrapper}>
        {
          !items || !items.length
            ?
            (<div>{DEFAULT_ADDED_CITIES_MESSAGE}</div>)
            :
            (<ul className={classes.citiesList}>
              {items.map((item) => (
                <AddedCity
                  key={item.id}
                  className={classes.citiesItem}
                  deleteCity={deleteCity}
                  chooseCity={chooseCity}
                  city={item}
                />
              ))}
            </ul>)
        }
      </div>
    </div>
  );
};

export default AddedCities;
