import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Form } from "../Components/UI/form/form"
import {getGender} from "../Components/getGender"

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

function Main () {
  return (
    <div>
      <h1 className='headerGenderize'>Find out gender by name</h1>
      <Form onClick={getGender} divClassName='container' formClassName='formGenderize'> </Form>
    </div>
  )
}

root.render(<Main/>)
