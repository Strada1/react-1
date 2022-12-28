import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { TASKS } from './Tasks/Tasks';



ReactDOM.createRoot(document.getElementById('container')).render(
  <React.StrictMode>
    <App tasks={TASKS}/>
  </React.StrictMode>
);
