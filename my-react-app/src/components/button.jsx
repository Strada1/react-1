import { TYPE_ELEMENT } from "./const";
import React from "react";

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button className={this.props.className} type={TYPE_ELEMENT.SUBMIT}>{this.props.text}</button>
        )
    }
}

