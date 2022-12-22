import "./Form.css";
import { Input } from "../Input/Input";
import { ButtonAdd } from "../ButtonAdd/ButtonAdd";

function Form() {
  return (
    <form className="to-do-form">
      <Input />
      <ButtonAdd />
    </form>
  );
}

export { Form };
