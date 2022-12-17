import React, { useState } from "react";
import { classes } from "../const";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const buttonClassList = event.target.classList
        buttonClassList.add(classes.activeButton);
        setTimeout(() => {
            buttonClassList.remove(classes.activeButton);
        }, 1000);
    }

    render() {
        return (
            <button className={this.props.className} id={this.props.id} type={this.props.type} onClick={this.handleClick}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;