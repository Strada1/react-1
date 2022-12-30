import { useState } from 'react'
import './App.css'
import SearchBar from './components/Searchbar/Searchbar'
import MainBlock from './components/MainBlock/MainBlock'

function App() {

  return (
    <div className="App">
      <div className='weather--wrapper'>
        <div className='weather--box'>
          <SearchBar />
          <MainBlock />
        </div>
      </div>
    </div>
  )
}

export default App
