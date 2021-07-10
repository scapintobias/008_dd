import React from 'react';
import { ContactLink } from '../components/contactlink';
import Homegrid from '../components/homegrid';
export const Homepage = () => (
	<>
		<main className='flex flex-col justify-between pt-20 pb-10'>
			<div className='space-y-2 font-thin leading-loose sm:pb-24 md:pb-32 sm:text-2xl t:text-4xl md:text-6xl lg:text-7xl text-ruby-400'>
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

			<Homegrid />
			<ContactLink />
		</main>
	</>
);
