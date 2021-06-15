import React from 'react';

export function ManinP() {
	return (
		<>
			<div className='flex items-center justify-center md:h-main sm:pb-4'>
				<div className='grid max-w-screen-xl md:gap-3 md:grid-cols-4 sm:grid-cols-2'>
					<img src='/cat/manin/capa.png' alt='poster' />

					<img src='/cat/manin/ciuha.png' alt='poster' />

					<img src='/cat/manin/tiepolo.png' alt='poster' />

					<img src='/cat/manin/munch.png' alt='poster' />
				</div>
			</div>

			<img alt='poster' src='/cat/manin/manin_7.png' className='w-full' />
			<div className='flex'>
				<img src='/cat/manin/manin_8.png' alt='poster' className='w-2/4' />
				<img src='/cat/manin/manin_9.png' alt='poster' className='w-2/4' />
			</div>
		</>
	);
}
