import './App.css'
import Greeting from './components/Greeting';

function App() {

  const user = {
    firstName: 'Павел',
    lastName: 'Павловов'
  };

  return (
    <div className="App">
      <div>
        <Greeting {...user}/>
      </div>
    </div>
  )
}

export default App
