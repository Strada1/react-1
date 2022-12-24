import "./Input.css";

function Input({ handleChange, value }) {
  return (
    <input
      type="text"
      className="to-do-input"
      name="to-do"
      placeholder="Добавить важных дел"
      onChange={handleChange}
      value={value}
    />
  );
}

export { Input };
