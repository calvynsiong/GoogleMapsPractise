import React from 'react';

const LocationTooltip = ({ info }) => {
	return (
		<div className='absolute top-12 h-auto w-6/12 max-h-full p-5 bg-black opacity-60 text-white py-6 text-3xl rounded-3xl'>
			<h2 className='p-1'>Event Location Info</h2>
			{info && (
				<ul>
					<li className='p-1'>
						ID : <strong>{info?.id}</strong>
					</li>
					<li className='p-1'>
						Title : <strong>{info?.title}</strong>
					</li>
				</ul>
			)}
		</div>
	);
};

export default LocationTooltip;
