import React from 'react';
import Carousel, {
	arrowsPlugin,
	autoplayPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function Item(props) {
	return (
		<div className='flex flex-col h-slider'>
			<div className='flex items-center h-full'>
				<img src={props.src} alt={props.title} className='px-4' />
			</div>
			<div className='flex justify-between w-full pt-8'>
				<p className='sm:text-xs t:text-base'>{props.title}</p>
				<p className='sm:text-xs t:text-base hover:text-ruby-400'>
					{props.study}{' '}
				</p>
			</div>
		</div>
	);
}

export default function Logos() {
	return (
		<div className='flex items-center max-w-screen-xl mx-auto mt-12 h-slider'>
			<Carousel
				plugins={[
					'infinite',
					{
						resolve: autoplayPlugin,
						options: {
							interval: 4000,
						},
					},

					{
						resolve: arrowsPlugin,
						options: {
							arrowLeft: (
								<button className='text-gray-300 h-slider md:px-4'>←</button>
							),
							arrowRight: (
								<button className='text-gray-300 h-slider md:px-4'>→</button>
							),
							addArrowClickHandler: true,
						},
					},
				]}
				animationSpeed={600}
			>
				<Item title='Corte d’Arte' src='/img/logos/corte__logo.png' />
				<Item title='Syneco' src='/img/logos/syneco__logo.png' />
				<Item title='Ideascudo' src='/img/logos/ideascudo__logo.png' />
				<Item title='Hospital' src='/img/logos/stb__logo.png' />
				<Item title='SAF' src='/img/logos/saf__logo.png' />
				<Item title='RPA' src='/img/logos/rpa__logo.png' />
				<Item title='Tokyo 2020' src='/img/logos/tokyo__logo.png' />
				<Item
					title='Fondazione Castiglioni'
					src='/img/logos/castiglioni__logo.png'
				/>
			</Carousel>
		</div>
	);
}
