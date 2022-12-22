import './PriorityBlock.css'

const PriorityBlock = props => {
    return (
        <div>
            <h3 className='head_3'>{props.header}</h3>
            <div>{props.children}</div>
        </div>

    )
}

export default PriorityBlock;
