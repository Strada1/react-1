import { useState } from 'react'

function AddBlock(props) {
    console.log('render AddBlock ' + props.priority);
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!text) return;
        props.addTask({ priority: props.priority, text: text, done: false });
        setText('');
    }

    return (
        <div className="add">
            <form onSubmit={handleSubmit} autoComplete="false">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Добавить важных дел" />
                <div className="icon-action icon-add">
                    <button type="submit">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddBlock;