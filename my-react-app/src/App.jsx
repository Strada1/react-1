import './App.css';
import { Welcome } from "./components";

function App() {
  return (
    <div>
      <div className="firstUser">
        <Welcome name="Алиса" />
      </div>

      <div className="secondUser">
        <Welcome className="secondUser" name="Иван" />
      </div>
    </div>
  )
}

export default App
