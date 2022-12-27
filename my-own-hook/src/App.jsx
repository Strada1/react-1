/* eslint-disable no-nested-ternary */
import React from 'react';
import useScreen from './hooks/useScreen'
import './App.css';

function App() {
  const loadWidthWindow = window.innerWidth;
  const {screenWidth, isMobile, isDesktop} = useScreen(loadWidthWindow);

  return (
    <div className="App">
      {isMobile
        ? <div><h4>Ширина Вашего мобильного экрана сейчас составляет:  
          <font size="5" color="teal"> {screenWidth}</font> px</h4>
          <img src="../images/smartphone.png" alt='mobile'/>
          </div>
        : isDesktop 
        ? <div><h4>Ширина Вашего десктоп экрана сейчас составляет:
          <font size="5" color="teal"> {screenWidth}</font> px</h4>
          <img src="../images/computer.png" alt='decktop'/>
          </div>
        : <h4>не удалось измерить размеры Вашего экрана</h4>
      }
    </div>
  )
}

export default App
