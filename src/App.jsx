import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useScreen from '../src/hooks/useScreen'

function App() {
  const [count, setCount] = useState(0)
  const { width, isMobile, isDesctop } = useScreen();

  console.log(width, isMobile, isDesctop);

  return (
    <div className="App">
      <h1>Custom hooks</h1>
      <p>{width}</p>
      <p>{`Mobile device - ${isMobile}`}</p>
      <p>{`Desctop device - ${isDesctop}`}</p>
    </div>
  )
}

export default App
