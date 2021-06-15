import React from 'react';

export function Syneco() {
	return (
		<>
			<div className='w-screen h-main'>
				<div className='flex items-center justify-center w-full h-full'>
					<img
						src='/cat/syneco/syneco_1.png'
						alt='logo'
						className='object-cover'
					/>
					<p className='absolute prose prose-2xl text-charcoal-300 bottom-20'>
						New identity for Syneco
					</p>
				</div>
			</div>

			<div className='grid l:grid-cols-2 sm:grid-cols-1'>
				<img src='/cat/syneco/syneco_3.png' alt='#' />
				<img src='/cat/syneco/syneco_4.png' alt='##' />
				<img src='/cat/syneco/syneco_6.png' alt='#' />
				<img src='/cat/syneco/syneco_5.png' alt='##' />
			</div>
		</>
	);
}
