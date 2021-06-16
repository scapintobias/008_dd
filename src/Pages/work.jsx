import React from 'react';

import { CaseStudies } from '../components/studies';
import { Collection } from '../components/collection';

export function Work() {
	return (
		<>
			<Collection />
			<CaseStudies />
			<section className='px-4 pb-24 mx-auto text-3xl font-light max-w-7xl'>
				<p>Have a project?</p>
				<p className='hover:text-ruby-400 font-extralight'>
					<a href='mailto:info@discipline.design&subject=New%20opportunity'>
						Email Us
					</a>
				</p>
			</section>
		</>
	);
}
