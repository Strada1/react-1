import React from "react";
import './TextInput.css';

class TextInput extends React.Component {
    handleChange() {
        console.log(document.querySelector(".input-name").value)
    }
    render() {
        return (
            <div>
                <input
                    className="input-name"
                    type="text"
                    placeholder="Введите имя"
                    onInput={this.handleChange}/>
            </div>
        );
    }
}

export default TextInput;
