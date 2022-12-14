import React, { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";

function Form(props) {
    return (
        <form className={props.className}>
            <TextInput className="gender__input" id="input" type="text" />
            <Button className="gender__button" id="button" type="submit" text="GENDERIZE" />
        </form>
    );
}

export default Form;