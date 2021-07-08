import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

function Nav() {
	const [isOpen, setIsOpen] = useState(false);
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
						<div className='hidden font-light md:block'>
							<div className='flex gap-3 uppercase text-ruby-400'>
								<NavLink
									to='/work'
									className=' hover:text-charcoal-800'
									activeClassName='text-charcoal-800'
								>
									Work
								</NavLink>

								<NavLink
									to='/about'
									className=' hover:text-charcoal-800'
									activeClassName='text-charcoal-800'
								>
									About
								</NavLink>

								<NavLink
									to='/contacts'
									className=' hover:text-charcoal-800'
									activeClassName='text-charcoal-800'
								>
									Contacts
								</NavLink>
							</div>
						</div>
					</div>

					<div className='flex md:hidden'>
						<div
							onClick={() => setIsOpen(!isOpen)}
							className='text-xl leading-none text-gray-800 inter animate-spin font-extra-black'
						>
							&#10033;
						</div>
					</div>
				</div>
			</div>
			<Transition show={isOpen}>
				<div
					className='absolute z-50 flex flex-col items-end justify-center w-full h-screen gap-4 pr-3 text-3xl font-black uppercase bg-white md:hidden text-ruby-400'
					id='mobile-menu'
				>
					<NavLink
						to='/work'
						onClick={() => setIsOpen(!isOpen)}
						activeClassName='text-charcoal-800'
					>
						Work
					</NavLink>

					<NavLink
						to='/about'
						onClick={() => setIsOpen(!isOpen)}
						activeClassName='text-charcoal-800'
					>
						About
					</NavLink>

					<NavLink
						to='/contacts'
						onClick={() => setIsOpen(!isOpen)}
						activeClassName='text-charcoal-800'
					>
						Contacts
					</NavLink>
				</div>
			</Transition>
			<hr className='border-ruby-50' />
		</>
	);
}

export default Nav;
