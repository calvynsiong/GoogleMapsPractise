import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import env from 'react-dotenv';

// components
import LocationMarker from './LocationMarker';
import LocationTooltip from './LocationTooltip';

console.log(env.API_KEY);

const Map = ({ wildfireEvents, center, zoom }) => {
	console.log(wildfireEvents, 'from Maps');
	const [locationInfo, setLocationInfo] = useState(null);
	console.log(locationInfo, 'is location Info');
	return (
		<div className='container relative w-screen h-screen mx-auto p-12'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: env.API_KEY }}
				defaultCenter={center}
				defaultZoom={zoom}>
				{wildfireEvents.map((wildfire) => {
					return (
						<LocationMarker
							key={wildfire.id}
							lat={wildfire.geometries[0].coordinates[1]}
							lng={wildfire.geometries[0].coordinates[0]}
							onMouseEnter={() => {
								setLocationInfo({ id: wildfire.id, title: wildfire.title });
							}}></LocationMarker>
					);
				})}
			</GoogleMapReact>
			{<LocationTooltip info={locationInfo}></LocationTooltip>}{' '}
		</div>
	);
};

Map.defaultProps = {
	center: {
		lat: 42.3275,
		lng: -122.8756,
	},
	zoom: 6,
};

export default Map;
