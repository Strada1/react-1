import React, { useState } from "react";

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = { checkInput: false }
    }

    handleInput(e) {
        const inputValue = e.target.value;
        if (inputValue.length <= 2) {
            this.setState({ checkInput: false });
        }
        else {
            this.setState({ checkInput: true });
        }
    }

    render() {
        let message = <p>Введите больше 2 символов</p>;
        if (this.state.checkInput) {
            message = ""
        }

        return (
            <div>
                <input onInput={this.handleInput} className={this.props.className} id={this.props.id} type={this.props.type}></input>
                {message}
            </div>
        )
    }
}

export default TextInput;