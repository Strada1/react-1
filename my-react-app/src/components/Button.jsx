import React, { useState } from "react";

function Button(props) {
    return (
        <button className={props.className} id={props.id} type={props.type}>
            {props.text}
        </button>
    );
}

export default Button;