import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import InfoCard from './InfoCard';
import { loaderW } from '../assets';
import Header from './Header';
import Footer from './Footer';



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
	return (
		<div className='container'>
			
			<div className='map-container'>
				<svg
						xmlns="http://www.w3.org/2000/svg"
						id='world-map'
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
			</div>
			<div className='sidebar'>
				<Header/>
				
			{loading && <img src={loaderW} className='loader'/>}
			{!loading && error && <p className='error'>{error}</p>}
			{!loading && !error && data &&  
			<InfoCard {...data.country}/>}
			<Footer/>
			</div>
			
		</div>
		
	);
}


WorldMap.defaultProps = {
	className: 'world-map',
	role: 'none',
	locationClassName: 'world-map__location',
	locationTabIndex: '0',
	locationRole: 'none',
};

export default WorldMap;