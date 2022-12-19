import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', gender: '' }
        this.getGender = this.getGender.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.render = this.render.bind(this);
    }

    handleChange(e) {
        this.setState({ name: e.target.value });
        console.log('state changed');
    }

    async getGender(e) {
        e.preventDefault();
        const serverUrl = 'https://api.genderize.io';
        const url = `${serverUrl}?name=${this.state.name}`;
        const response = await fetch(url);
        const answer = await response.json();
        this.handleGender(answer.gender)
    }

    handleGender(gender) {
        this.setState({ gender: gender })
    }

    render() {
        return (
            <div className="container">
                <form
                    className="form"
                    onSubmit={this.getGender}
                    onChange={this.handleChange}
                >
                    <TextInput />
                    <Button />
                </form>
                <div>{ this.state.gender }</div>
            </div>
        )
    }
}

export default App