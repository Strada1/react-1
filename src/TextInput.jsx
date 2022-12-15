import React from 'react';

export class TextInput extends React.Component {
    render() {
      return <input className={this.props.className} type={this.props.type} id={this.props.id} placeholder={this.props.value}/>
    }
  }