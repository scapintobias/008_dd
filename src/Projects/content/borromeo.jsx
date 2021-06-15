import React from 'react';

export function Borromeo() {
	return (
		<>
			<div className='flex items-center justify-center w-screen bg-red-800 h-study'>
				<img
					alt='borromeo'
					src='/cat/borromeo/borromeo logo.png'
					className='px-8'
				/>
			</div>
			<img alt='borromeo' src='/cat/borromeo/borromeo.jpg' />
			<img alt='borromeo' src='/cat/borromeo/borromeo 02.png' />
			<div className='flex items-center justify-center h-main'>
				<iframe
					title='map'
					src='https://www.google.com/maps/embed?pb=!4v1593527146194!6m8!1m7!1soRCLTqKyBGT0y6ozxy-H2Q!2m2!1d45.46314368044688!2d9.182473936322225!3f94.38994941469211!4f1.7059391248629936!5f0.7820865974627469'
					width='70%'
					height='70%'
					frameborder='0'
					style={{ border: '0' }}
					allowfullscreen='false'
					aria-hidden='false'
					tabindex='0'
				/>
			</div>
		</>
	);
}
