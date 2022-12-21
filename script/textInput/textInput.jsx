import React from "react";

class TextInput extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="text" className="inputName" value={this.props.value} onChange={this.props.name} />
        )
    }
}

export default TextInput;