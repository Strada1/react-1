import React from "react";

export class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <input className={this.props.className} type="text" onChange={this.props.onChange}></input>
        )
    }
}

