import React from 'react';
import classes from './index.module.css';

const Input = ({className, ...props}) => {
  return (
    <input className={`${className} ${classes.input}`} {...props} />
  );
};

export default Input;
