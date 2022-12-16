import React from 'react';

class InputGenderize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Name'
    }
  }

    

  render() {
    return <input onChange={this.props.name} className='input' placeholder='введите имя'></input>;
  }
}

export default InputGenderize;
