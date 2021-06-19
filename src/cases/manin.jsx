import React from 'react';
import Slider from '../components/slider';

export function Manin() {
	return (
		<>
			<div className='flex flex-col max-w-screen-xl mx-auto h-main'>
				<div className='flex-grow mx-auto md:pt-32 '>
					<div className=' sm:w-44 t:w-72 md:w-96 xl:px-0 sm:px-2'>
						<Slider>
							<img src='/cases/manin/capa.png' alt='poster' />

							<img src='/cases/manin/ciuha.png' alt='poster' />

							<img src='/cases/manin/tiepolo.png' alt='poster' />

							<img src='/cases/manin/munch.png' alt='poster' />
						</Slider>
					</div>
				</div>

				<div className=' sm:px-2 xl:px-0 text-charcoal-500'>
					<p className='font-light sm:text-xl t:text-5xl'>Villa Manin</p>
					<p className='t:text-4xl sm:text-sm font-extralight'>Posters</p>
				</div>
			</div>

			<img alt='poster' src='/cases/manin/manin_7.png' className='w-full' />
			<div className='flex sm:flex-col md:flex-row'>
				<img
					src='/cases/manin/manin_8.png'
					alt='poster'
					className='md:w-2/4 sm:w-full'
				/>
				<img
					src='/cases/manin/manin_9.png'
					alt='poster'
					className='md:w-2/4 sm:w-full'
				/>
			</div>
		</>
	);
}
