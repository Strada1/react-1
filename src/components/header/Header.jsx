import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './header.sass';
import { isCheckingText } from '../../services/helpers';

function Header(props) {
  const [inputValue, setInputValue] = useState('');
  const { taskPriority, addTask } = props;

  const cleaningForm = () => {
    setInputValue('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isCheckingText(inputValue)) {
      return;
    }
    addTask(inputValue, taskPriority);
    cleaningForm();
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className='to-do__form'>
      <div className='to-do__title'>{taskPriority}</div>
      <button
        type='button'
        onClick={handleSubmit}
        className='to-do__button-plus'
      >
        ➕
      </button>
      <input
        value={inputValue}
        onChange={handleChange}
        className='to-do__text-input'
        placeholder='Добавить важных дел'
        type='text'
        name='task_text'
      />
    </form>
  );
}

Header.propTypes = {
  taskPriority: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default Header;
