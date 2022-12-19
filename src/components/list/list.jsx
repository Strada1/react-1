export function List({ list, isRender }) {
	if(!isRender) {
		return null
	}

	return (
		<ul>
			{list.map(item => {
				return <li key={item.id}>{`${item.name}-${item.gender}`}</li>
			})}
		</ul>
	);
};