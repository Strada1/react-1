import React from 'react';
import Title from './title';
import Header from './header';
import List from './list/list';
import './assets/style.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="high_parent">
        <Title title="High" />
        <Header value="Добавить важных дел" />
        <List />
      </div>
      <div className="low_parent">
        <Title title="Low" />
        <Header value="Добавить не очень важных дел" />
      </div>
    </div>
  );
}

export default App;
