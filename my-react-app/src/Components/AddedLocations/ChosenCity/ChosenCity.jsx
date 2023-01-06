import React from 'react';
import './styleChosenCity.css';

function ChosenCity(props) {
  const {
    data: { nameCity, id },
    deleteSelectedCity,
    setCity,
  } = props;
  const handleClickCity = (event) => {
    setCity(event.target.textContent);
  };
  return (
    <div className="chosenCity">
      <button
        type="button"
        className="chosenCity__name"
        onClick={handleClickCity}
      >
        {nameCity}
      </button>
      <button
        type="button"
        className="chosenCity__btn"
        onClick={() => {
          deleteSelectedCity(id);
        }}
      >
        +
      </button>
    </div>
  );
}

export default ChosenCity;
