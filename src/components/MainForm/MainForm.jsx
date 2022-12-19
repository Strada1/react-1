import React from 'react';
import TextInput from "../TextInput/TextInput.jsx";
import Button from "../Button/Button.jsx";
import Result from "../Result/Result.jsx";
import "./styleMainForm.css";
import { fetchRequest } from '../../functions/fetchRequest.js';

class MainForm extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    inputValue : '',
    gender : 'unknown',
  };
  this.handleChangeInput = this.handleChangeInput.bind(this);
  this.handleSendRequest = this.handleSendRequest.bind(this);
  
};
  handleChangeInput(event) {
    this.setState({
      inputValue : event.target.value,
    })
  };

  handleSendRequest(event) {
    event.preventDefault();
    fetchRequest(this.state.inputValue,'https://api.genderize.io')
      .then((result)=> {
        this.setState({
          gender: result.gender,
        })
      })
 }

  render() {
    return(
      <div className='block-main_wrapper'>
        <form className="form-main" onSubmit={this.handleSendRequest}>
          <TextInput textchange={this.handleChangeInput}></TextInput>
          {(this.state.inputValue).length <= 2 && <div className='text-result'>Please enter more letters</div>}
          <Button length={(this.state.inputValue).length}></Button>
          {this.state.gender !== 'unknown' 
          ? <Result resultTextContent={this.state.gender}></Result>
          : <div className='text-result'>Enter a name to get the suggested gender</div>
          }
          {this.state.gender === null && <div className='text-result'>Please enter another name</div>}
        </form>
      </div>
    )
  }
}
export default MainForm