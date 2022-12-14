import React from 'react'
import { OutputResult } from '../components/OutputResult'
import { WelcomeQuestion } from '../components/WelcomeQuestion'
import { UiForm } from '../components/UiForm'
import '../../styles/styles.css'


function App() {

  return (
    <div className='wrapper'>
      <WelcomeQuestion />
      <UiForm />
      <OutputResult />
    </div>
  )
}

export { App }
