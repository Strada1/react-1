import React, { useContext } from 'react';
import ChosenCity from './ChosenCity/ChosenCity';
import './styleAddedLocations.css';
import selectedCityContext from '../App/selectedCityContext';

function AddedLocations(props) {
  const value = useContext(selectedCityContext);
  const { deleteSelectedCity, setCity } = props;
  const displayChosenCities = value.selectedCities.map((obj) => (
    <ChosenCity
      data={obj}
      key={obj.id}
      deleteSelectedCity={deleteSelectedCity}
      setCity={setCity}
    />
  ));
  return (
    <div className="added-locations">
      <div className="added-locations__title">Added Locations:</div>
      <div className="added-locations__field">{displayChosenCities}</div>
    </div>
  );
}

export default AddedLocations;
