import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const WorldMap = (props) => {

	const [code, setCode] = useState("ZA")
	const {error, data, loading} = useQuery(gql`query Query
	{
		country(code: "${code}") {
			name
			capital
			currency
			native
			languages
			{
				name
			}
		}
	}`);

	console.log({error, data, loading})
	return (
		<>
		{loading && <p className='loading-text'>Loading...</p>}
    	{!loading && error && <p className='error-text'>{error}</p>}
		
		<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox={props.map.viewBox}
				className={props.className}
				role={props.role}
				aria-label={props.map.label}
			>
			{props.childrenBefore}
			{props.map.locations.map((location, index) => {
				return (
					<path
						id={location.id}
						name={location.name}
						d={location.path}
						className={typeof props.locationClassName === 'function' ? props.locationClassName(location, index) : props.locationClassName}
						tabIndex={typeof props.locationTabIndex === 'function' ? props.locationTabIndex(location, index) : props.locationTabIndex}
						role={props.locationRole}
						aria-label={typeof props.locationAriaLabel === 'function' ? props.locationAriaLabel(location, index) : location.name}
						aria-checked={props.isLocationSelected && props.isLocationSelected(location, index)}
						onMouseOver={props.onLocationMouseOver}
						onMouseOut={props.onLocationMouseOut}
						onMouseMove={props.onLocationMouseMove}
						onClick={() => {setCode(location.id.toUpperCase())}}
						onKeyDown={props.onLocationKeyDown}
						onFocus={props.onLocationFocus}
						onBlur={props.onLocationBlur}
						key={location.id}
					/>
				);
			})}
			{props.childrenAfter}
		</svg>
		</>
		
	);
}

WorldMap.propTypes = {
	// Map properties
	map: PropTypes.shape({
		viewBox: PropTypes.string.isRequired,
		locations: PropTypes.arrayOf(
			PropTypes.shape({
				path: PropTypes.string.isRequired,
				id: PropTypes.string.isRequired,
				name: PropTypes.string
			})
		).isRequired,
		label: PropTypes.string
	}).isRequired,
	className: PropTypes.string,
	role: PropTypes.string,

	// Locations properties
	locationClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	locationTabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	locationRole: PropTypes.string,
	locationAriaLabel: PropTypes.func,
	onLocationMouseOver: PropTypes.func,
	onLocationMouseOut: PropTypes.func,
	onLocationMouseMove: PropTypes.func,
	onLocationClick: PropTypes.func,
	onLocationKeyDown: PropTypes.func,
	onLocationFocus: PropTypes.func,
	onLocationBlur: PropTypes.func,
	isLocationSelected: PropTypes.func,

	// Slots
	childrenBefore: PropTypes.node,
	childrenAfter: PropTypes.node,
};

WorldMap.defaultProps = {
	className: 'world-map',
	role: 'none',
	locationClassName: 'world-map__location',
	locationTabIndex: '0',
	locationRole: 'none',
};

export default WorldMap;