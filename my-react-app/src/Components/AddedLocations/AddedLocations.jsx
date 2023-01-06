import React from 'react';
import ChosenCity from './ChosenCity/ChosenCity';
import './styleAddedLocations.css';

function AddedLocations(props) {
  const { selectedCities, deleteSelectedCity, setCity } = props;
  const displayChosenCities = selectedCities.map((obj) => (
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
