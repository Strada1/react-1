import React from 'react';

class DivName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.genderize}
      </div>
    );
  }
}

export default DivName;
