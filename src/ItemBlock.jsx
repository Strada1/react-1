import { useState } from 'react'

function ItemBlock(props) {
    const item = props.item;

    const [done, setDone] = useState(item.done);

    function onDoneChange(e) {
        item.done = e.target.checked;
        setDone(item.done);
    }

    return (
        <div className="list-item">
            <input type="checkbox" checked={done} onChange={e => onDoneChange(e)} />
            <div className="text">{item.text}</div>
            <div onClick={() => props.deleteTask(item)} className="icon-action icon-close">
                <i className="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default ItemBlock;