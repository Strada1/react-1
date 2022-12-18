import React from "react";

class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.input = this.input.bind(this);
    }

    input(e) {
        // e.preventDefault();
        console.log(this);
        console.log('focus');
        console.log(e.target.value);
    }

    render() {
        return (
            <input
                // onFocus={this.input}
                onInput={this.input}
                type="text"
                className="name__input"
            />
        )
    }
}

export default TextInput