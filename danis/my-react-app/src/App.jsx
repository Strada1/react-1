import React, {useState} from "react";
import Search from "./components/search";
import Tabs from "./components/tabs/tabs";
import './app.css'

function App() {
  const [value, setValue] = useState('Aktobe');
  const [display, setDisplay] = useState('tab-1');

  function trackInput(newValue) {
    setValue(newValue);
  }

  function displayTab(value) {
    setDisplay(value);
  }

  return (
    <div className="App">
      <Search getValue={trackInput} />
      <div className="main__block">
        <Tabs nameCity={value} display={display} setValue = {setValue} />
        <div className="left__block-bottom">
        <button onClick={() => displayTab('tab-1')}>Now</button>
        <button onClick={() => displayTab('tab-2')}>Details</button>
        <button onClick={() => displayTab('tab-3')}>Forecast</button>
      </div>
      </div>
    </div>
  );
}

export default App;
