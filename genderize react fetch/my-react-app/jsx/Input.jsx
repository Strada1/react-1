import React from 'react';

class InputGenderize extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.name}
        className='input'
        placeholder='введите имя'
      ></input>
    );
  }
}

export default InputGenderize;
