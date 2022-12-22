import "./Input.css"

function Input() {
  return (
    <input
      type="text"
      className="to-do-input"
      name="to-do"
      placeholder="Добавить важных дел"
    />
  );
}

export { Input };
