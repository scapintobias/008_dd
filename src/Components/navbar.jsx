import React from 'react';

import { NavLink } from 'react-router-dom';

function Nav() {
	return (
		<>
			<div className='max-w-screen-lg mx-auto text-lg sm:px-2 lg:px-0'>
				<div className='flex justify-between w-full pt-2 pb-1'>
					<div className='flex items-center justify-between w-full leading-none'>
						<NavLink
							className='font-condensed-extra-black text-ruby-400'
							to='/'
						>
							DD
						</NavLink>

						<div className='flex gap-3 uppercase text-ruby-400'>
							<NavLink
								to='/info'
								className=' hover:text-charcoal-800'
								activeClassName='text-charcoal-800'
							>
								info
							</NavLink>
						</div>
					</div>
				</div>
			</div>

			<hr className='border-ruby-50' />
		</>
	);
}

export default Nav;
