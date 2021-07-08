import React from 'react';
import { NavLink } from 'react-router-dom';
import { ContactLink } from '../components/contactlink';
import Homegrid from '../components/homegrid';

export const Homepage = () => (
	<>
		<main className='pt-20'>
			<div className='space-y-2 font-thin leading-loose sm:pb-24 md:pb-32 sm:text-3xl t:text-4xl md:text-6xl lg:text-7xl text-ruby-400'>
				At{' '}
				<span className='tracking-tighter font-condensed-extra-black'>
					DisciplineDesign
				</span>
				<br />
				we help companies
				<br />
				and businesses grow
				<br />
				by designing things
				<br />
				since 2008.
			</div>
			<NavLink
				to='/about'
				className='px-4 pt-3 pb-2 text-2xl font-thin uppercase rounded-full bg-charcoal-50 hover:bg-ruby-400 hover:text-white'
			>
				About us
			</NavLink>
		</main>
		{/* <Homegrid /> */}
		<main className='py-32'>
			<ContactLink />
		</main>
	</>
);
