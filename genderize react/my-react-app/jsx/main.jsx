import React from 'react';
import ReactDOM from 'react-dom/client';
import InputGenderize from './Input';
import ButtonGenderize from './Button';

const root = ReactDOM.createRoot(document.getElementById('root'));

const form = (
  <form>
    <InputGenderize />
    <ButtonGenderize />
  </form>
);

root.render(form);
