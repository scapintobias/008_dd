import React from 'react';
import { NavLink } from 'react-router-dom';

function Title() {
	return (
		<div className='pb-16 md:w-6/12'>
			<div className='font-normal sm:text-xl t:text-3xl'>Anthology</div>
			<div className='font-thin tracking-normal sm:text-sm t:text-lg'>
				An overview of our wide fields of action
			</div>
		</div>
	);
}

function Item(props) {
	return (
		<div>
			<NavLink to={'/work/' + props.to} className='hover:text-ruby-400'>
				<div className='font-light sm:text-xl t:text-3xl'>{props.type}</div>
				<div className='font-thin tracking-normal sm:text-sm t:text-lg'>
					{props.payoff}
				</div>
			</NavLink>
		</div>
	);
}

export function Collection() {
	return (
		<div className='flex py-32 sm:flex-col md:flex-row'>
			<Title />
			<section className='flex-col md:space-y-16 sm:space-y-6'>
				<Item
					to='logos'
					type='Logos & Trademarks'
					payoff='What makes a brand memorable and unique'
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
