import React from 'react';
import classes from './index.module.css';

const Button = ({className, children, ...props}) => {
  return (
    <button
      className={`${className} ${classes.button}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
