import React from 'react';
import CN from 'classnames';
export function ContactLink(props) {
	return (
		<section
			className={CN(
				'pb-24 mx-auto text-3xl font-light max-w-7xl',
				props.className
			)}
		>
			<p>Have a project?</p>
			<p className='hover:text-ruby-400 font-extralight'>
				<a href='mailto:info@discipline.design?subject=New%20opportunity'>
					Email Us
				</a>
			</p>
		</section>
	);
}
