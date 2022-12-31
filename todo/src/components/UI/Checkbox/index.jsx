import React from 'react';
import { StyledLabel } from './styled';

const Checkbox = (props) => {
  return (
    <StyledLabel>
      <input
        checked={props.isChecked || false}
        onChange={props.onChange}
        type="checkbox"
      />
      <span></span>
    </StyledLabel>
  );
};

export default Checkbox;
