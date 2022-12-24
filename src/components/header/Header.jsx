import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './header.sass';

function Header(props) {
  const [inputValue, setInputValue] = useState('');
  const { taskPriority, addTask } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(inputValue, taskPriority);
    setInputValue('');
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className='to-do__form'>
      <div className='to-do__title'>{taskPriority}</div>
      <div onClick={handleSubmit} className='to-do__button-plus'>
        ➕
      </div>
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
  taskPriority: PropTypes.string,
  addTask: PropTypes.func,
};

export default Header;
