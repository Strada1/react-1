import React from 'react';
import './task.css';

export default function Task({ taskDescription }) {
  return (
    <div className="container__for-task">
      <label htmlFor>
        <input type="checkbox" />
        <p>{taskDescription}</p>
      </label>
      <button type="submit">X</button>
    </div>
  );
}
