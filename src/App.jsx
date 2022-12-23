import React, { useState } from 'react'
import './App.css'
import List from "./components/List";
import Modal from './pages/modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <List />
      <button onClick={ () => setIsModalOpen(!isModalOpen) }>{isModalOpen ? 'Показать все задачи' : 'новая задача'}</button>
      {isModalOpen && <Modal />}
    </>
  )
}

export default App
