import { useState } from 'react';
import { TabButton } from '../TabButton/TabButton';
import './TabButtons.css';

function TabButtons({ setTab, weather }) {
  const [activeButton, setActiveButton] = useState('Now');

  return (
    <nav className="tabs">
      <TabButton text="Now" setTab={setTab} weather={weather} activeButton={activeButton} setActiveButton={setActiveButton} />
      <TabButton text="Details" setTab={setTab} weather={weather} activeButton={activeButton} setActiveButton={setActiveButton} />
      <TabButton text="Forecast" setTab={setTab} weather={weather} activeButton={activeButton} setActiveButton={setActiveButton} />
    </nav>
  );
}

export { TabButtons };
