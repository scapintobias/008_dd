import React from 'react';

export function Arte() {
	return (
		<>
			<div className='flex items-center justify-center w-screen h-main'>
				<img
					src='/cat/corte/posters/poster.jpg'
					alt='poster'
					className='w-2/3'
				/>
			</div>

			<img src='/cat/corte/posters/flyer.jpg' alt='flyer' />
			<img src='/cat/corte/posters/banner.jpg' alt='poster' />
		</>
	);
}
