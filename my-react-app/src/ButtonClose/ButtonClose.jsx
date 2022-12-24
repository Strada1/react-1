import "./ButtonClose.css";

function ButtonClose({ value, deleteTask }) {
  return (
    <button
      className="btn-exit"
      type="button"
      onClick={() => {
        deleteTask(value);
      }}
    ></button>
  );
}

export { ButtonClose };
