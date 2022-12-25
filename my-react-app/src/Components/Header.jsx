function Header({ header, getValue, value, newTask }) {
    return (
        <div>
            {header.divClass == 'add-task-high' ? <p>HIGH</p> : <p>LOW</p>}
            <div className={header.divClass}>
                <form className={header.formClass} onSubmit={newTask}>
                    <input
                        type="text"
                        className={header.inputClass}
                        id="addTask"
                        placeholder="Добавить важных дел"
                        value={value}
                        onChange={getValue}
                    />
                    <button className={header.buttonClass}>+</button>
                </form>
            </div>
        </div>
    )
}
export { Header }
