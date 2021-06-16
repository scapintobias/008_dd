import React from 'react';

export function Ducati() {
	return (
		<>
			<section className='flex flex-col items-center justify-center w-screen h-main'>
				<iframe
					width='100%'
					height='60%'
					title='ducati'
					src='https://www.youtube.com/embed/IhxD--LuNA0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen'
				/>
			</section>
		</>
	);
}
