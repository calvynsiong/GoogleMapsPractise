import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ onMouseEnter }) => {
	return (
		<Icon
			icon={locationIcon}
			onMouseEnter={onMouseEnter}
			className='text-4xl text-red-600 transform  hover:text-black hover:scale-75'></Icon>
	);
};

export default LocationMarker;
