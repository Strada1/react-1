import { Form } from "./form";
import { CLASS_ELEMENT } from "./const";
import React from "react";

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return(
            <div className={this.props.className}>
                <Form className={CLASS_ELEMENT.FORM}/>
            </div>
        )
    }
}
