import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Form } from "../Components/form/form"
import { TextInput } from "../Components/input/input"
import { Button } from "../Components/button/button"


const root = ReactDOM.createRoot(
  document.getElementById('root')
)

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    return (
      <div>
          <h1 className='headerGenderize'>Find out gender by name</h1>
          <Form divClassName='container' formClassName='formGenderize' > 
              <TextInput textInputClassName="inputNameGenderize"/>
              <Button buttonClassName="buttonSubmitGenderize"/>
          </Form>
          
      </div>
    );
  } 
}

function PropsToInput () {

}

root.render(<Main/>)

export {Main}