import React from 'react';

import { Par } from './components';
//import Vimeo from '@u-wave/react-vimeo';

export function Craf() {
	return (
		<>
			<div className='flex items-center justify-center w-screen h-main'>
				<img alt='craf' src='/cat/craf/craf_1.png' />
			</div>
			<div className='flex items-center justify-center w-screen h-main'>
				<Par>
					<p>
						This logo and Corporate Image have been developed during a workshop
						with Armando Milani giving some fundamental theoric lessons, and his
						brother Maurizio focusing on the production compartment. The very
						limited group of people granted me the possibility to design it
						four-handedly in a very close collaboration with him. Funnily
						enough, this workshop should have been participated by Massimo
						Vignelli too, but for personal reason had to decline.
					</p>
					<p>
						Many people feel ashamed showing their first projects. I could dig
						more into the archives and find lots of logos from the 2006-2008
						period, but they wouldn't be as meaningful as this. And the reason
						is quite clear. Before meeting with Armando and Maurizio, I had a
						very fond appreciacion of everything design-related, but I was
						skeptical about turning into the core business of my profession. So
						this, rather than the first project at all, is the first project I
						designed with DisciplineDesign in mind, and a remainder of a
						spectacular encounter, where my career started to shape.
					</p>
				</Par>
			</div>
			<img alt='craf' src='/cat/craf/craf_2.png' />
			<div className='flex'>
				<img alt='craf' src='/cat/craf/craf_4.png' className='w-2/4' />
				<img alt='craf' src='/cat/craf/craf_5.png' className='w-2/4' />
			</div>
		</>
	);
}
