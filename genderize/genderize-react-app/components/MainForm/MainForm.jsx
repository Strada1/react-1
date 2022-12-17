import React from "react";
import TextInput from "../TextInput/TextInput.jsx";
import Button from "../Button/Button.jsx";
import './MainForm.css'

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            name: "",
            gender: "",
            showResolve: false,
            errorMessage: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateValue = this.updateValue.bind(this);

    }

    async postRequest(name) {
        if (!name) {
            return;
        }
        try {
            const serverUrl = new URL('https://api.genderize.io');
            const url = `${serverUrl}?name=${name}`;
            const response = await fetch(url);
            const resolve = await response.json();
            return resolve;
        } catch (error) {
            new Error(error.message);
        }

    }

    async handleSubmit(event) {
        event.preventDefault();
        if (!this.state.value) {
            return;
        }
        console.log("request sent " + this.state.value)
        const response = await this.postRequest(this.state.value)
        this.updateState(response.name, response.gender)

        // this.showResolve();
        this.setState({showResolve: true});
        console.log(this.state)
    }

    updateState(name, gender) {
        this.setState({name: name, gender: gender});
    }

    updateValue(value) {
        // TODO: нужно разобраться с this.setState({errorMessage: true}) обновляется при double click keyboard
        if (this.state.value.length < 2) {
            this.setState({value: value, showResolve: false, errorMessage: true})
        } else {
            this.setState({value: value, showResolve: false, errorMessage: false});
        }
    }

    render() {
        return (
            <div>
                <form className="main-form" onSubmit={this.handleSubmit}>
                    <TextInput updateValue={this.updateValue}/>
                    <Button/>
                </form>
                {this.state.errorMessage && <h2>Short name</h2>}
                {this.state.showResolve && <p>resolve: {this.state.name} {this.state.gender}</p>}
            </div>
        );
    }

}

export default MainForm;