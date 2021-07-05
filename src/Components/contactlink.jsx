import React from 'react';

export function ContactLink() {
	return (
		<section className='pb-24 mx-auto text-3xl font-normal max-w-7xl'>
			<div>Have a project?</div>
			<div className='font-thin hover:text-ruby-400'>
				<a href='mailto:info@discipline.design?subject=New%20opportunity'>
					Email Us
				</a>
			</div>
		</section>
	);
}
