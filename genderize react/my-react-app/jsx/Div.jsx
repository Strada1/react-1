import React from 'react';

class DivName extends React.Component {
  constructor(props) {
    super(props);

    
  }

  render() {
    return <div>{this.props.name} is {this.props.genderize}</div>;
  }
}

export default DivName