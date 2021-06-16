import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='z-50 w-screen'>
			<nav className='sm:px-1.5 sm:pt-0.5 xl:px-0 md:pt-2 pb-1.5'>
				<div className='mx-auto max-w-7xl'>
					<div className='flex justify-between h-8'>
						<div className='flex items-end justify-between md:min-w-full'>
							<NavLink className='flex-shrink-0' to='/'>
								<span className='font-black tracking-tighter text-ruby-400 md:text-4xl sm:text-2xl hover:text-charcoal-800'>
									DisciplineDesign
								</span>
							</NavLink>
							<div className='flex items-baseline justify-between pb-1.5 space-x-8 sm:hidden md:block pr-1'>
								<NavLink
									to='/work'
									className='font-light uppercase text-ruby-400 hover:text-charcoal-800'
									activeClassName='text-gray-600'
								>
									Work
								</NavLink>

								<NavLink
									to='/about'
									className='font-light uppercase text-ruby-400 hover:text-charcoal-800'
									activeClassName='text-gray-600'
								>
									About
								</NavLink>

								<NavLink
									to='/contacts'
									className='font-light uppercase text-ruby-400 hover:text-charcoal-800'
									activeClassName='text-gray-600'
								>
									Contacts
								</NavLink>
							</div>
						</div>
						<div className='flex -mr-2 md:hidden'>
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className='inline-flex items-center justify-center p-2 text-gray-900 bg-white rounded-md hover:text-gray-900 hover:ring-0 active:ring-0 focus:outline-none'
								aria-controls='mobile-menu'
								aria-expanded='false'
							>
								<span className='sr-only'>Open main menu</span>
								{!isOpen ? (
									<svg
										className='block w-6 h-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								) : (
									<svg
										className='block w-6 h-6'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										aria-hidden='true'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition show={isOpen}>
					<div
						className='absolute right-0 w-full bg-white top-12 md:hidden '
						id='mobile-menu'
					>
						<div className='pt-4 pb-3 mt-2 space-y-1 sm:px-3'>
							<NavLink
								to='/work'
								className='block w-full px-4 text-lg font-light text-right uppercase rounded-full text-ruby-400 hover:bg-white hover:text-black'
								onClick={() => setIsOpen(!isOpen)}
								activeClassName='text-gray-600'
							>
								Work
							</NavLink>

							<NavLink
								to='/about'
								className='block w-full px-4 text-lg font-light text-right uppercase rounded-full text-ruby-400 hover:bg-white hover:text-black'
								onClick={() => setIsOpen(!isOpen)}
								activeClassName='text-gray-600'
							>
								About
							</NavLink>

							<NavLink
								to='/contacts'
								className='block w-full px-4 text-lg font-light text-right uppercase rounded-full text-ruby-400 hover:bg-white hover:text-black'
								onClick={() => setIsOpen(!isOpen)}
								activeClassName='text-gray-600'
							>
								Contacts
							</NavLink>
						</div>
					</div>
				</Transition>
			</nav>
		</div>
	);
}

export default Nav;
