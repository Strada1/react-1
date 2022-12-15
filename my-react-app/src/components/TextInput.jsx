import React, { useState } from "react";

class TextInput extends React.Component{
    render() {
        return(
            <input className={this.props.className} id={this.props.id} type={this.props.type} />
        )
    }
}

export default TextInput;