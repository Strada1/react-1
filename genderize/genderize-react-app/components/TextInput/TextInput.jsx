import React from "react";
import './TextInput.css';

class TextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
        console.log(this.state.value)
    }

    render() {
        return (
            <div>
                <input
                    className="input-name"
                    type="text"
                    placeholder="Введите имя"
                    value={this.state.value}
                    onChange={this.handleChange}/>
            </div>
        );
    }
}

export default TextInput;
