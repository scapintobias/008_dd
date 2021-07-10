import React from 'react';
import Carousel, {
	autoplayPlugin,
	arrowsPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { NavLink } from 'react-router-dom';

function Item(props) {
	return (
		<>
			<div className='flex items-center justify-center w-full max-w-screen-md h-title'>
				<img src={props.src} alt={props.title} className='px-4 pb-8' />
			</div>
			<div className='absolute z-50 flex w-screen mx-auto font-light tracking-wider sm:text-xs md:text-lg md:justify-around md:flex-row sm:flex-col sm:items-center bottom-6'>
				<NavLink to={'/work/study/' + props.to} className='underline'>
					{props.link}
				</NavLink>
				<div className='flex sm:flex-col md:flex-row sm:items-center sm:pt-4 md:pt-0'>
					<div className='font-light uppercase md:pr-4'>{props.title}</div>

					<div className='italic font-thin '>{props.subtitle}</div>
				</div>
			</div>
		</>
	);
}

export default function Logos() {
	return (
		<section className='flex items-center h-whole'>
			<Carousel
				plugins={[
					'infinite',

					{
						resolve: autoplayPlugin,
						options: {
							interval: 2500,
						},
					},

					{
						resolve: arrowsPlugin,
						options: {
							arrowLeft: (
								<button className='font-thin text-gray-400 h-title'>←</button>
							),
							arrowRight: (
								<button className='font-thin text-gray-400 h-title'>→</button>
							),

							addArrowClickHandler: true,
						},
					},
				]}
				animationSpeed={600}
			>
				<Item
					link='Case study'
					to='yape'
					subtitle='A very smart robot'
					title='Yape'
					src='/img/logos/yape__logo.webp'
				/>
				<Item
					subtitle='Modern art exhibition'
					title='Corte d’Arte'
					src='/img/logos/corte__logo.png'
				/>
				<Item
					subtitle='A bar at the heat of Milan'
					title='Borromeo5'
					src='/img/logos/borromeo__logo.png'
					link='Case study'
					to='borromeo5'
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
					subtitle='competition'
					title='Fondazione Castiglioni'
					src='/img/logos/castiglioni__logo.png'
				/>
			</Carousel>
		</section>
	);
}
