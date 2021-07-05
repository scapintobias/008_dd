import React from 'react';
import Slider from '../components/slider';
import { Par, StudiesGrid, Study, Title } from './components';

export function Lima() {
	return (
		<>
			<main>
				<div className='absolute'>
					Collaborator:{' '}
					<a
						href='http://www.aetherotopies.com/'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-ruby-400'
					>
						Samuel Iuri
					</a>
				</div>
			</main>
			<Title
				title='Metro de Lima'
				subtitle='New identity and wayfinding'
				src='/lima/limalogo.png'
			/>
			<main>
				<Par>
					<p className='pb-5'>
						The first stage of the process consisted in a vast analysis of all
						the available material of both the existing and the future lines, in
						order to comprehend the vastness and complexity of the system, and
						its actual wayfinding.
					</p>
					<p className='pb-5'>
						The outcome of this research has shown vast possibilities of
						improvement, from both a design and infrastructural integration
						perspective, to solve the lack of scalability, legibility, and
						consistency.
					</p>
					<p className='pb-5'>
						The second stage consisted in the evaluation of the available
						channels to convey information through, which consist in: map,
						station signage, train signage, etc.
					</p>
					<p>
						The third stage consisted in the developement of a coherent system,
						which takes advantage of the stations’ architecture, has a inner
						modularity (hence using the pillars), and provides in a clear way
						the few but essential informations (station name, train direction,
						entries and exits)
					</p>
				</Par>

				<Slider>
					<img src='/cases/lima/4.png' alt='Mezzanine' />
					<img src='/cases/lima/1.png' alt='Mezzanine' />
					<img src='/cases/lima/2.png' alt='Mezzanine' />
					<img src='/cases/lima/3.png' alt='Mezzanine' />
				</Slider>

				<img
					src='/cases/lima/ortorenderstazione.jpg'
					alt='section'
					className='object-cover object-left pt-10 h-96'
				/>
				<img src='/cases/lima/map.png' alt='map' className='mt-12 ' />
				<Par>
					<h2>Map</h2>
					<p>
						This kind of representation shows a fictional geography by moving
						away from the concept that transportation maps had to position the
						underground geography directly to the aboveground geography. Such
						design moves away from the idea that the representation has to
						follow the actual geographical route of the lines. By replacing the
						strict geographically imposed rules, that requires that entities
						represented be placed exactly where they are located in the physical
						world, with a regular pattern of horizontal, vertical or diagonal
						lines the proposed map depicts much more clearly the relative
						locations of the different lines and the sequence of stations. In
						this way, the map turns out to be an useful support in gaining an
						understanding of the complexities of the underground lines, and an
						aid in travel planning. For these reasons it can act as a navigation
						tool to assist in working one’s way through the underground maze of
						lines and stations and as a reference once a journey is underway.
					</p>
				</Par>
				<img src='/cases/lima/5.png' alt='Map' className='w-full pb-6' />
				<img
					src='/cases/lima/lima_binder.png'
					alt='Map'
					className='w-full pb-12'
				/>

				<StudiesGrid>
					<Study
						img='https://upload.wikimedia.org/wikipedia/commons/5/57/Villa_Manin_-_Passariano.jpg'
						to='manin'
						type='Posters'
						title='Villa Manin'
						subtitle='Passariano'
					/>
					<Study
						img='/cases/lima/4.png'
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
						img='/cases/yape/yape_4.png'
						to='yape'
						type='Corporate'
						title='Yape'
						subtitle='e-Novia'
					/>
				</StudiesGrid>
			</main>
		</>
	);
}
