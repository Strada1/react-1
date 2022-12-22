import './css/title.css';

function Title(props) {
	const {titleClass, titleName} = props
	return(
		<h3 className={titleClass}>{titleName}</h3>
	)
	
}

export {Title}
