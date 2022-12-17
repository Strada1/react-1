import React from 'react';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Result from "../Result/Result";
import "./styleMain.css";

class Main extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    inputValue : '',
    male : null,
  };
  this.handleChangeInput = this.handleChangeInput.bind(this);
};
  handleChangeInput(event) {
    this.setState({
      inputValue : event.target.value,
    })
  };

  async handleSendRequest(data, serverUrl) {
    const options = {
      method : 'GET',
    }
    const url = `${serverUrl}?name=${data}`;
      let response = await fetch(url, options)
      let gender = await response.json();
      this.setState({
        male : gender.gender,
      });
    }

  render() {
    return(
      <div className='block-main_wrapper'>
        <div className="block-main">
          <TextInput textchange={this.handleChangeInput}></TextInput>
          {(this.state.inputValue).length <= 2 && <div>Please enter more letters</div>}
          <Button status={(this.state.inputValue).length} findoutgender={()=>this.handleSendRequest(this.state.inputValue,'https://api.genderize.io')}></Button>
          {this.state.male !== null 
          ? <Result resultTextContent={this.state.male}></Result>
          : <div className='text-result'>Enter a name to get the suggested gender</div>
          }
        </div>
      </div>
    )
  }
}
export default Main