import React, { useState } from "react";
import { classes, url } from "../const";
import Button from "./Button";
import TextInput from "./TextInput";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        const name = e.target.input.value;
        const serverUrl = `${url}${name}`;
        const responce = await fetch(serverUrl);
        const human = await responce.json();
        const gender = await human.gender;
        alert(`${name} is ${gender}`)
    }


    render() {
        return (
            <form className={this.props.className} onSubmit={this.handleSubmit}>
                <TextInput className={classes.input} type="text" id="input" />
                <Button className={classes.button} type="submit" text="GENDERIZE" />
            </form>
        )
    }
}

export default Form;