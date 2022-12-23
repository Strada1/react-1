import './app.sass';
import React from 'react';
import Header from '../header/Header';
import List from '../list/List';

function App() {
  return (
    <div className='to-do'>
      <div className='to-do__priority'>
        <Header taskPriority='high' />
        <List taskPriority='high' />
      </div>

      <div className='to-do__priority'>
        <Header taskPriority='low' />
        <List taskPriority='low' />
      </div>
    </div>
  );
}

export default App;
