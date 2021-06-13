import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
	return (
		<div className='w-screen h-screen relative'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyB2oXBKif1zXDjPvsoY_DmL3Th6xpCprJE' }}
				defaultCenter={center}
				defaultZoom={zoom}></GoogleMapReact>
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
