import React from 'react';

import { Par, Title } from './components';
//import Vimeo from '@u-wave/react-vimeo';

export function Yape() {
	return (
		<>
			<Title
				title='Yape'
				subtitle='New identity for a very smart robot'
				src='/yape/yape_1.webp'
			/>

			<Par>
				YAPE is a self-driving droid for last-mile delivery. It is a
				revolutionary solution for delivery services, concerning food and small
				goods, that can be applied indoor as well as outdoor, providing
				low-contact services. YAPE can easily interact with the environment and
				it can stroll autonomously within private and smart spaces. Moreover,
				its reconfigurable glove compartment can fit with different delivery
				services, from parcel to food.
			</Par>

			{/* <Vimeo video='387650908' responsive muted /> */}

			<Par>lorem ipsum</Par>
			<img src='/cases/yape/yape_5.png' alt='brand book' />
			<img src='/cases/yape/yape_6.png' alt='buttons' className='w-2/4 ' />
		</>
	);
}
