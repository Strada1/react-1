import React from 'react';

export class Result extends React.Component {
    render() {
        return <div className={this.props.className} id={this.props.id}>{this.props.name}</div>
    }
}

