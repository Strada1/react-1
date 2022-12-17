import React, { useState } from "react";
import { classes } from "../const";
import Form from "./Form";

class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className={this.props.className}>
                <Form className={classes.form} message="привет!" />
            </div>
        )
    }
}

export default Main;