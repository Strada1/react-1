import React from "react";

function Input(props) {
return(
    <input type="text" className={props.inputClass} placeholder="Добавить дел" onChange={props.onChange} value={props.inputValue}/>
)
}

export {Input}