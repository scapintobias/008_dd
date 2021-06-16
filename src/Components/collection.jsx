import React from 'react';
import { NavLink } from 'react-router-dom';

function Title() {
	return (
		<div className='pb-16 l:w-6/12'>
			<p className='font-medium sm:text-xl t:text-3xl'>Collections</p>
			<p className='sm:text-sm t:text-lg font-extralight'>
				An overview of our wide fields of action
			</p>
		</div>
	);
}

function Item(props) {
	return (
		<div>
			<NavLink to={'/work/' + props.to} className='hover:text-ruby-400'>
				<p className='font-light sm:text-xl t:text-3xl'>{props.type}</p>
				<p className='sm:text-sm t:text-lg font-extralight'>{props.payoff}</p>
			</NavLink>
		</div>
	);
}

export function Collection() {
	return (
		<div className='flex px-4 py-32 mx-auto xl:px-0 sm:flex-col l:flex-row max-w-7xl'>
			<Title />
			<section className='flex-col l:space-y-16 sm:space-y-6'>
				<Item
					to='logos'
					type='Logos & Trademarks'
					payoff='What makes a brand memorable and unique'
				/>
				<Item
					to='corporate'
					type='Corporate Images'
					payoff='Bringing life to a Company'
				/>
				<Item to='print' type='Print' payoff='Text and images laid on paper' />
				<Item
					to='posters'
					type='Posters'
					payoff='When you want your message big and loud'
				/>
			</section>
		</div>
	);
}
