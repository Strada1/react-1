import React from 'react';
import Header from '../Header/Header';
import Task from '../Task/Task';
import taskList from '../../js/main';
import './App.css';
import List from '../List/List';


function App() {
  
  
  const upArray  = (array) => {
    console.log(array)
    // return array
  }

  return (
    <div className='wrapper'>

      <div className='chapter'>High</div>
      <Header onUpArray={upArray} />
      <List />

      <div className='chapter'>Low</div>
      <Header />
      <List />

    </div>
  );

  
}

export default App;
