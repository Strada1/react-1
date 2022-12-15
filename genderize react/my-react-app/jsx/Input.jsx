import React from 'react';

class InputGenderize extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('Done...');
  }

  render() {
    return (
      <input
        onInput={this.handleSubmit}
        className='input'
        placeholder='введите имя'
      ></input>
    );
  }
}

export default InputGenderize;
