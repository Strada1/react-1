export function Main(props) {
    return(
        <div className={props.className}>
            <Form className='form'/>
        </div>
    )
}

function Form(props) {
    return(
        <form className={props.className}>
            <TextInput className='input'/>
            <Button className='button' text='='/>
        </form>
    )
}

function TextInput(props) {
    return(
        <input className={props.className} type="text"></input>
    )
}

function Button(props) {
    return(
        <button className={props.className} type='submit'>{props.text}</button>
    )
}