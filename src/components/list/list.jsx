export function List(props) {
	const listItem = props.list.map(item => {
		return <li key={item.id}>{item.name}-{item.gender}</li>
	});

	return(
		<ul>
			{listItem}
		</ul>
	);
};