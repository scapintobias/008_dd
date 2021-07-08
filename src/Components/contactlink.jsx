import React from 'react';

export function ContactLink() {
	return (
		<div className='pb-24 text-3xl font-normal'>
			<div>Have a project?</div>
			<div className='font-thin hover:text-ruby-400'>
				<a href='mailto:info@discipline.design?subject=New%20opportunity'>
					Email Us
				</a>
			</div>
		</div>
	);
}
