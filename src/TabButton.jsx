function TabButton(props) {
    const className = "tablinks" + (props.active ? " active" : "");
    return (
        <button onClick={props.handleClick} className={className}>{props.name}</button>
    )
}

export default TabButton