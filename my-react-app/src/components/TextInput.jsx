import React, { useState } from "react";

function TextInput(props) {
    return (
        <input className={props.className} id={props.id} type={props.type} />
    );
}

export default TextInput;