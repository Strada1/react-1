import React from 'react';

class TextInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className='input-group mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-default'>
          Write the name
        </span>
        <input
          onChange={onChange}
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
