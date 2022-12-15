import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainContainer } from './MainContainer';
import './App.css'


function App() {
  return (
    <div>
      <MainContainer name="GENDERIZE" className="containerElement"/>        
    </div>
  );
}


async function OnButtonPress() {
  let userName = document.getElementById('inputName');
  let firstName = userName.value;
  let result =  document.getElementById('resultField');
  const serverUrl = 'https://api.genderize.io';
  const url = `${serverUrl}?name=${firstName}`;
  let response = await fetch(url);
  let text = await response.text();
  let json = JSON.parse(text);
  result.innerHTML = `${firstName} is ${json.gender}`;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
let button = document.getElementById('button');
button.onclick = OnButtonPress;

export default App
