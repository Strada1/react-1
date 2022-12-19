import React from 'react';
import ReactDOM from 'react-dom/client';
import InputGenderize from './Input';
import fetchRequest from './async';
const resolve = fetchRequest;

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
    return (
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
        {this.state.value.length <= 2 ? (
          <div> Entry name</div>
        ) : (
          <div> {this.state.gender} </div>
        )}
      </form>
    );
  }
}

export default FormGenderize;
