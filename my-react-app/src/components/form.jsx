import TextInput from "./textInput";
import Button from "./button";

function Form(props) {
    return(
        <form className={props.className}>
            <TextInput className='input'/>
            <Button className='button' text='='/>
        </form>
    )
}

export default Form;



