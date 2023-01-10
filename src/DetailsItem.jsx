function DetailsItem(props) {
    return (
        <div className="details-item">
            {props.name}: <span>{props.value}</span>
        </div>
    )
}

export default DetailsItem