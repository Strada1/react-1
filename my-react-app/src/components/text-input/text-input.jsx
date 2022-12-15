import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleInput = (event) => {
    console.log(this.state.value);
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div className='input-group mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Write the name
        </span>
        <input
          onChange={this.handleInput}
          value={value}
          type='text'
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-default'
        />
      </div>
    );
  }
}
export default TextInput;
