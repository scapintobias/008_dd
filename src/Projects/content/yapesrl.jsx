import React from 'react';

import { Par } from './components';
import Vimeo from '@u-wave/react-vimeo';

export function YapeSrl() {
	return (
		<>
			<div className='flex items-center justify-center w-screen h-study'>
				<div className='absolute w-full text-charcoal-500 bottom-6'>
					<div className='max-w-3xl sm:mx-4 md:mx-auto'>
						<p className='pb-4 text-5xl font-light'>Yape</p>
						<p className='text-4xl font-extralight'>
							New identity for a very smart robot
						</p>
					</div>
				</div>
				<img src='/cat/yape/yape_1.webp' alt='yape' className='w-2/3' />
			</div>

			<Par>
				YAPE is a self-driving droid for last-mile delivery. It is a
				revolutionary solution for delivery services, concerning food and small
				goods, that can be applied indoor as well as outdoor, providing
				low-contact services. YAPE can easily interact with the environment and
				it can stroll autonomously within private and smart spaces. Moreover,
				its reconfigurable glove compartment can fit with different delivery
				services, from parcel to food.
			</Par>

			<Vimeo video='387650908' responsive muted />

			<Par>lorem ipsum</Par>
			<img src='/cat/yape/yape_5.png' alt='brand book' />
			<img src='/cat/yape/yape_6.png' alt='buttons' className='w-2/4 ' />
		</>
	);
}
