import { TextInput } from "./textInput";
import { Button } from "./button";
import { SERVER_URL, addGender } from "./server";
import React from "react";

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if (this.state.name.length < 3) {
            this.setState({gender: 'Name cannot be less than 2 characters'})
        } else {
            addGender(`${SERVER_URL}?name=${this.state.name}`).then(user => this.setState({gender: user.gender}));
        }
    }

    render() {
        return(
            <div>
                <form className={this.props.className} onSubmit={this.handleSubmit}>
                    <TextInput className='input' onChange={this.handleChange}/>
                    <Button className='button' text='='/>
                </form>
                <span>{this.state.gender}</span>
            </div>
        )
    }
}







