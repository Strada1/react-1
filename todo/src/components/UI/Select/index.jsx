import React from 'react';
import { StyledSelect } from './styled';

const Select = ({className, ...props}) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <StyledSelect
      value={props.value}
      className={className}
      onChange={handleChange}
    >
      <option disabled value=''>{props.defaultValue}</option>

      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
