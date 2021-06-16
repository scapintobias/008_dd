import React from 'react';
import { NavLink } from 'react-router-dom';
import { ContactLink } from '../components/contactlink';
import Homegrid from '../components/homegrid';

export const Homepage = () => (
	<section className='max-w-screen-xl px-2 pt-20 mx-auto xl:px-0'>
		<div className='pb-32 space-y-2 font-extralight sm:text-2xl t:text-4xl md:text-5xl l:text-6xl text-ruby-400'>
			<p>We help companies</p>
			<p> and businesses grow</p>
			<p> by designing things</p>
			<p>since 2008.</p>
		</div>
		<NavLink
			to='/about'
			className='px-4 py-3 uppercase rounded-full sm:text-sm md:text-base l:text-2xl bg-charcoal-50 font-extralight hover:bg-ruby-400 hover:text-white'
		>
			About us
		</NavLink>
		<Homegrid />
		<ContactLink />
	</section>
);
