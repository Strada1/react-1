import React from "react";

function ButtonClose({value, DeleteTask}) {
return(
    <button className='delete' onClick={() => DeleteTask(value)}>x</button>
)
}

export {ButtonClose}