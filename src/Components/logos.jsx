import React from 'react';
import Carousel, {
	arrowsPlugin,
	autoplayPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function Item(props) {
	return (
		<>
			<div className='flex items-center justify-center w-full max-w-screen-lg h-slider'>
				<img src={props.src} alt={props.title} className='px-4 ' />
			</div>

			<div className='absolute flex justify-center w-screen gap-3 text-xs tracking-wider bottom-3'>
				<p className='uppercase '>{props.title}</p>
				<p>—</p>
				<p className='text-xs italic '>{props.subtitle}</p>
			</div>
		</>
	);
}

export default function Logos() {
	return (
		<div className='flex items-center max-w-screen-xl mx-auto h-slider'>
			<Carousel
				plugins={[
					'infinite',

					{
						resolve: autoplayPlugin,
						options: {
							interval: 3000,
						},
					},

					{
						resolve: arrowsPlugin,
						options: {
							arrowLeft: <button className='text-gray-300 h-slider'>←</button>,
							arrowRight: <button className='text-gray-300 h-slider'>→</button>,

							addArrowClickHandler: true,
						},
					},
				]}
				animationSpeed={600}
			>
				<Item
					subtitle='Modern art exhibition'
					title='Corte d’Arte'
					src='/img/logos/corte__logo.png'
				/>
				<Item
					subtitle='Oil company'
					title='Syneco'
					src='/img/logos/syneco__logo.png'
				/>
				<Item
					subtitle='Advanced cloth'
					title='Ideascudo'
					src='/img/logos/ideascudo__logo.png'
				/>
				<Item subtitle='Care' title='Hospital' src='/img/logos/stb__logo.png' />
				<Item
					subtitle='Transports'
					title='SAF'
					src='/img/logos/saf__logo.png'
				/>
				<Item
					subtitle='Design studio'
					title='RPA'
					src='/img/logos/rpa__logo.png'
				/>
				<Item
					subtitle='Summer Olympics'
					title='Tokyo 2020'
					src='/img/logos/tokyo__logo.png'
				/>
				<Item
					title='Fondazione Castiglioni'
					src='/img/logos/castiglioni__logo.png'
				/>
			</Carousel>
		</div>
	);
}
