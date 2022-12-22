import React from 'react';
import ReactDOM from 'react-dom/client';
import InputGenderize from '../Input/Input';
import fetchRequest from '../async/async';
import './Form.css'


class FormGenderize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      gender: '',
    };
  }

  handlerName(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handlerGender(gender) {
    this.setState({
      gender: gender,
    });
  }

  render() {
    const gender = fetchRequest(this.state.value)
    gender.then(result => this.state.gender = (result.gender))

    return (
      <div className='wrapper'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchRequest(this.state.value);
        }}
      >
        <InputGenderize
          value={this.state.value}
          name={(e) => this.handlerName(e)}
        />
        <button className='button' type='submit' />
        {this.state.value.length <= 2 ? <div> Entry name</div> : <div>{this.state.value + ' is ' + this.state.gender}</div>}
      </form>
      </div>
      
    );
  }
}

export default FormGenderize;
