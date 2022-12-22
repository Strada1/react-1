import { TextInput } from "./textInput";
import { Button } from "./button";
import { addGender } from "./server";
import { SERVER_URL, CLASS_ELEMENT, ERROR, DEFAULT_STATE, MIN_LENGTH } from "./const";
import React from "react";

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if (this.state.name.length < MIN_LENGTH) {
            this.setState({gender: ERROR.LENGTH})
        } else {
            addGender(`${SERVER_URL}?name=${this.state.name}`).then(user => this.setState({gender: user.gender}));
        }
    }

    render() {
        const { gender, name } = this.state;
        
        return(
            <div className='row'>
                <form className={this.props.className} onSubmit={this.handleSubmit}>
                    <TextInput className={CLASS_ELEMENT.INPUT} onChange={this.handleChange}/>
                    <Button className={CLASS_ELEMENT.BUTTON} text={`what gender is ${name}`}/>
                </form>
                
                <span>{gender}</span>
            </div>
        )
    }
}







