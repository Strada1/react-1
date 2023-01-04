import ItemBlock from "./ItemBlock";

function ItemList(props) {
    const items = props.items.map(
        (item, index) => <ItemBlock key={index} item={item} deleteTask={props.deleteTask} />)

    return (
        <div className="list">
            {items}
        </div>
    );
}

export default ItemList;