import React from 'react';

export function Expo() {
	return (
		<>
			<div className='flex items-center justify-center w-screen h-main'>
				<img src='/cat/expo/expo_1.png' alt='poster' className='w-11/12 ' />
			</div>

			<img src='/cat/expo/expo_2.jpg' alt='expo' />

			<img src='/cat/expo/expo_3.jpg' alt='expo' />
			<div className='relative h-screen'>
				<img
					src='/cat/expo/expo_4.jpg'
					alt='expo'
					className='object-cover object-bottom w-full h-full'
				/>
			</div>
		</>
	);
}
