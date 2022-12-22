import { TYPE_ELEMENT } from "./const";
import React from "react";

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const { className, text } = this.props;

        return(
            <button className={className} type={TYPE_ELEMENT.SUBMIT}>{text}</button>
        )
    }
}

