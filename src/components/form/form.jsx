import TextInput from "../input/input";
import Button from "../button/button";

function Form() {
	function handleSubmit(e) {
		e.preventDefault();

		console.log('submit');
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextInput />
			<Button />
		</form>
	)
}

export default Form;