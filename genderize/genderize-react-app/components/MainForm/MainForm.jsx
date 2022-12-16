import React from "react";
import TextInput from "../TextInput/TextInput.jsx";
import Button from "../Button/Button.jsx";
import './MainForm.css'

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        // this.setState({value: event.target.value})
        console.log("request sent ")
    }

    render() {
        return (
            <div>
                <form className="main-form" onSubmit={this.handleSubmit}>
                    <TextInput />
                    <Button />
                </form>
            </div>
        );
    }

}

export default MainForm;