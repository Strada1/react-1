import React from 'react';

import './styleMenuButton.css';

function MenuButton(props) {
  const { text, id, setActiveButton } = props;
  const handleChangeActive = (event) => {
    setActiveButton(event.target.id);
  };
  return (
    <button
      className="menu-button"
      type="button"
      id={id}
      onClick={handleChangeActive}
    >
      {text}
    </button>
  );
}

export default MenuButton;
