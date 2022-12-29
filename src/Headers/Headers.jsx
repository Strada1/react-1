import { Input } from "./Input"
import { Button } from "./Button";

function Headers(props) {
  return (
      <div className={props.mainClass}>
        <form className={props.formClass} onSubmit={props.onSubmit}>
            <Input inputClass={props.inputClass} onChange={props.onChange} inputValue={props.inputValue}/>
            <Button/>
        </form>
      </div>
  );
}

export {Headers}
