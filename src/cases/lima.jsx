import React from 'react';

import { Par, StudiesGrid, Study } from './components';

export function Lima() {
	return (
		<>
			<div className='absolute w-full origin-left transform rotate-90 translate-x-full right-4'>
				This project was developed in close collaboration with:{' '}
				<a
					href='http://www.aetherotopies.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-ruby-400'
				>
					Samuel Iuri
				</a>
			</div>
			<div className='flex items-center justify-center w-screen h-study'>
				<div className='absolute w-full text-charcoal-500 bottom-6'>
					<div className='max-w-3xl sm:mx-4 md:mx-auto'>
						<p className='pb-4 text-5xl font-light'>Metro de Lima</p>
						<p className='text-4xl font-extralight'>
							New identity and wayfinding
						</p>
					</div>
				</div>
				<img src='/cat/lima/limalogo.png' alt='limalogo' className='w-2/3' />
			</div>

			<Par>
				<p className='pb-5'>
					The first stage of the process consisted in a vast analysis of all the
					available material of both the existing and the future lines, in order
					to comprehend the vastness and complexity of the system, and its
					actual wayfinding.
				</p>
				<p className='pb-5'>
					The outcome of this research has shown vast possibilities of
					improvement, from both a design and infrastructural integration
					perspective, to solve the lack of scalability, legibility, and
					consistency.
				</p>
				<p className='pb-5'>
					The second stage consisted in the evaluation of the available channels
					to convey information through, which consist in: map, station signage,
					train signage, etc.
				</p>
				<p>
					The third stage consisted in the developement of a coherent system,
					which takes advantage of the stations’ architecture, has a inner
					modularity (hence using the pillars), and provides in a clear way the
					few but essential informations (station name, train direction, entries
					and exits)
				</p>
			</Par>

			<img src='/cat/lima/4.png' alt='Mezzanine' className='w-full my-6' />
			<img src='/cat/lima/1.png' alt='Mezzanine' className='w-full my-6' />
			<img src='/cat/lima/2.png' alt='Mezzanine' className='w-full my-6' />
			<img src='/cat/lima/3.png' alt='Mezzanine' className='w-full my-6' />

			<div className='inline-block whitespace-nowrap'>
				<img
					src='/cat/lima/ortorenderstazione.jpg'
					alt='section'
					className='object-cover object-left h-96'
				/>
			</div>

			<img
				src='/cat/lima/map.png'
				alt='map'
				className='mt-12 md:mx-auto sm:w-full md:w-9/12'
			/>
			<Par>
				<h2>Map</h2>
				<p>
					This kind of representation shows a fictional geography by moving away
					from the concept that transportation maps had to position the
					underground geography directly to the aboveground geography. Such
					design moves away from the idea that the representation has to follow
					the actual geographical route of the lines. By replacing the strict
					geographically imposed rules, that requires that entities represented
					be placed exactly where they are located in the physical world, with a
					regular pattern of horizontal, vertical or diagonal lines the proposed
					map depicts much more clearly the relative locations of the different
					lines and the sequence of stations. In this way, the map turns out to
					be an useful support in gaining an understanding of the complexities
					of the underground lines, and an aid in travel planning. For these
					reasons it can act as a navigation tool to assist in working one’s way
					through the underground maze of lines and stations and as a reference
					once a journey is underway.
				</p>
			</Par>
			<img src='/cat/lima/5.png' alt='Map' className='w-full pb-6' />
			<img src='/cat/lima/lima_binder.png' alt='Map' className='w-full pb-12' />

			<StudiesGrid>
				<Study
					img='/img/lidar.jpg'
					to='yape'
					type='UX/UI'
					title='Yape'
					subtitle='e-Novia'
				/>
				<Study
					img='/cat/lima/4.png'
					to='lima'
					type='Waifinding'
					title='Metro de Lima'
					subtitle='subway'
				/>
				<Study
					img='https://images-na.ssl-images-amazon.com/images/I/41W1qtcgLDL._AC_SL1000_.jpg'
					to='yape-srl'
					type='Corporate'
					title='Borromeo5'
					subtitle='A new flavour'
				/>
				<Study
					img='/cat/yape/yape_4.png'
					to='yape-srl'
					type='Corporate'
					title='Yape'
					subtitle='e-Novia'
				/>
			</StudiesGrid>
		</>
	);
}
