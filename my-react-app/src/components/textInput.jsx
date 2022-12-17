import { TYPE_ELEMENT } from "./const";
import React from "react";

export class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <input className={this.props.className} type={TYPE_ELEMENT.TEXT} onChange={this.props.onChange}></input>
        )
    }
}

