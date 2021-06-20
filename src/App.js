import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
// components
import Map from './components/Map';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function App() {
	const [eventData, setEventData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			const res = await axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
			// destructure events
			const { events } = res.data;
			console.log(events);

			// Filters for wildfire events
			// const wildfires = events.map((event) =>
			// 	event.categories.map((category) => category.title),
			// );
			// console.log(wildfires);
			const wildfires = events.filter((event) =>
				event.categories.map((category) => category.title).includes('Wildfires'),
			);
			console.log(wildfires, 'are wildfires');
			setEventData(wildfires);
		};
		fetchEvents();
		setLoading(false);
	}, []);

	return (
		<div>
			{loading ? (
				<div className='w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50'>
					<span
						className='text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0'
						style={{
							top: '50%',
						}}>
						<AiOutlineLoading3Quarters className='text-6xl animate-spin'></AiOutlineLoading3Quarters>
					</span>
				</div>
			) : (
				<Fragment>
					<h1 className='text-5xl p-6 mt-8 text-center'>Global Wildfire Map</h1>
					<Map wildfireEvents={eventData} />
				</Fragment>
			)}
		</div>
	);
}

export default App;
