import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainContainer } from './components/MainContainer';
import './App.css'


function App() {
  return (
    <div>
      <MainContainer name="GENDERIZE" className="containerElement"/>        
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


export default App
