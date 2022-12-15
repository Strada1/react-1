import React from 'react';

export class Button extends React.Component {
  render() {
      return <button className={this.props.className}  id={this.props.id}>GO!</button>
  }
}
