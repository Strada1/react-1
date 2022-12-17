import React from "react";
import './TextInput.css';

class TextInput extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.updateValue(event.target.value);

    }

    render() {
        return (
            <div>
                <input
                    className="input-name"
                    type="text"
                    placeholder="Write name"
                    onChange={this.handleChange}/>
            </div>
        );
    }
}

export default TextInput;
