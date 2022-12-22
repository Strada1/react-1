import { TYPE_ELEMENT } from "./const";
import React from "react";

export class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    const { className, onChange } = this.props;

        return(
            <input className={className} type={TYPE_ELEMENT.TEXT} onChange={onChange}></input>
        )
    }
}

