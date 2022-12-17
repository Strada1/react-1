import './App.css';
import { Main } from "./components/container";
import { CLASS_ELEMENT } from "./components/const";

export function App() {
  return (
    <div>
      <Main className={CLASS_ELEMENT.CONTAINER} />
    </div>
  )
}

