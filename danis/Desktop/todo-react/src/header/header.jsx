import React from 'react';
import './header.css';

export default function Header({ value }) {
  function onSubmut(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmut}>
      <input type="text" placeholder={value} />
      <input type="submit" value="+" />
    </form>
  );
}
