import React from 'react';
import Slider from '../components/slider';

export function Manin() {
	return (
		<>
			<div className='flex items-center w-screen mx-auto h-title sm:w-44 t:w-72 md:w-96 lg:px-0 sm:px-2'>
				<Slider>
					<img src='/cases/manin/capa.png' alt='poster' />

					<img src='/cases/manin/ciuha.png' alt='poster' />

					<img src='/cases/manin/tiepolo.png' alt='poster' />

					<img src='/cases/manin/munch.png' alt='poster' />
				</Slider>
			</div>
			<main className='grid grid-cols-2 gap-2 mb-2'>
				<img
					alt='poster'
					src='/cases/manin/manin_7.png'
					className='col-span-2'
				/>

				<img
					src='/cases/manin/manin_8.png'
					alt='poster'
					className='sm:col-span-2 md:col-span-1'
				/>
				<img
					src='/cases/manin/manin_9.png'
					alt='poster'
					className='sm:col-span-2 md:col-span-1'
				/>
			</main>
		</>
	);
}
