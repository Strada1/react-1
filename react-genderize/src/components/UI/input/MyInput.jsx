import React from 'react'
import './MyInput.css';

const MyInput = ({...props}) => {
  return (
    <input 
      className={props.className}

      {...props}

    />
  );
};

export default MyInput;
