import { Form } from "./form";
import { CLASS_ELEMENT } from "./const";

export function Main(props) {
    return(
        <div className={props.className}>
            <Form className={CLASS_ELEMENT.FORM}/>
        </div>
    )
}
