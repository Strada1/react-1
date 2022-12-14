import React from 'react';
import TextInput from '../text-input/text-input.jsx';
import Button from '../button/button.jsx';
import './main.css';

function Main() {
  return (
    <div className='gender'>
      <h1 className='gender-title'>
        {' '}
        &#128697; know gender by name &#128698;{' '}
      </h1>
      <div className='gender-box'>
        <form className='gender-form'>
          <TextInput />
          <Button />
        </form>
      </div>
    </div>
  );
}
export default Main;
