import { Button } from './Button.jsx';
import { TextInput } from './TextInput';
export function MainComponent() {
  return (
    <form>
      <label>
        <TextInput InputClass="userInput"></TextInput>
        <Button btnClass="btn"></Button>
      </label>
    </form>
  );
}
