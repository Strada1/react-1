import React from 'react';
import { closeIcon } from '../../assets/images';
import { ELEMENTS_TYPES } from '../../js/constants';

function TaskItem(props) {
  const { id, children, className, onClick } = props;

  return (
    <label className={className}>
      <input type={ELEMENTS_TYPES.INPUT.checkbox} />
      <li key={id}>{children}</li>
      <input type={ELEMENTS_TYPES.INPUT.image} src={closeIcon} onClick={onClick} />
    </label>
  );
}

export default TaskItem;
