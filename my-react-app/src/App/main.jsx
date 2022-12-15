import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Form } from "../Components/UI/form/form"


const root = ReactDOM.createRoot(
  document.getElementById('root')
)

function Main () {
  return (
    <div>
      <h1 className='headerGenderize'>Find out gender by name</h1>
      <Form divClassName='container' formClassName='formGenderize'> </Form>
    </div>
  )
}

root.render(<Main/>)
