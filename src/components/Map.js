import React from 'react';
import GoogleMapReact from 'google-map-react';
import env from 'react-dotenv';

const Map = ({ center, zoom }) => {
	return (
		<div className='container relative h-screen w-1/2 mx-auto'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: env.API_KEY }}
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
