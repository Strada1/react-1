import './locations.css';
import { CitiesList } from '../citiesList/citiesList';

export function Locations() {
	return (
		<div className="locations">
			<h2 className="locations__title">
				Added Locations:
			</h2>
			<CitiesList />
		</div>
	);
}