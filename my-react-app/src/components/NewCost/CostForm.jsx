import React, { useState } from 'react';
import './CostForm.css';

export function CostForm() {
  const [name, SetName] = useState('');
  const [amount, SetAmount] = useState('');
  const [date, SetDate] = useState('');

  function nameChangeHandler(e) {
    SetName(e.target.value);
  }

  function amountChangeHandler(e) {
    SetAmount(e.target.value);
  }

  function dateChangeHandler(e) {
    SetDate(e.target.value);
  }

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control ">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control ">
          <label>Сумма</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control ">
          <label>Дата</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
}
