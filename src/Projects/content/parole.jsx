import React from 'react';

export function Parole() {
	return (
		<>
			<div className='w-screen h-main'>
				<div className='flex items-center justify-center w-full h-full'>
					<p
						className='font-black tracking-tighter uppercase futura text-9xl'
						style={{ letterSpacing: '-0.6rem' }}
					>
						parole prigioniere
					</p>
					<p className='absolute prose prose-2xl text-charcoal-300 bottom-20'>
						<i>Caged Words</i>, photography exhibition in EXPO 2015
					</p>
				</div>
			</div>

			<img src='/cat/prigioniere/expo_0.png' alt='parole' />

			<img
				src='/cat/prigioniere/expo_me.jpg'
				alt='parole'
				className='py-12 mx-auto xl:w-2/5 lg:w-2/4 md:w-3/5 t:w-4/5'
			/>

			<div className='grid grid-cols-3'>
				<img src='/cat/prigioniere/expo_2.jpg' alt='parole' />
				<img src='/cat/prigioniere/expo_3.jpg' alt='parole' />
				<img src='/cat/prigioniere/expo_4.jpg' alt='parole' />
			</div>
			<img
				src='/cat/prigioniere/expo_7.jpg'
				alt='parole'
				className='py-12 mx-auto xl:w-2/5 lg:w-2/4 md:w-3/5 t:w-4/5'
			/>

			<div className='grid grid-cols-3'>
				<img src='/cat/prigioniere/expo_4a.jpg' alt='parole' />

				<img src='/cat/prigioniere/expo_5.jpg' alt='parole' />

				<img src='/cat/prigioniere/expo_6.jpg' alt='parole' />
			</div>
		</>
	);
}
