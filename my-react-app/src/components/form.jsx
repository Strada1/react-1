import { TextInput } from "./textInput";
import { Button } from "./button";
import React from "react";

export class Form extends React.Component {
    render () {
        return(
            <form className={this.props.className}>
                <TextInput className='input'/>
                <Button className='button' text='='/>
            </form>
        )
    }
}



