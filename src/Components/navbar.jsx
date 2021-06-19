import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className='z-50 w-screen'>
			<section>
				<div className='max-w-screen-xl mx-auto sm:px-1.5 xl:px-0'>
					<div className='flex items-center justify-between h-8'>
						<div className='flex items-center justify-between md:min-w-full'>
							<NavLink
								className='text-2xl font-black tracking-tighter text-ruby-400'
								to='/'
							>
								DD
							</NavLink>
							<div className='hidden md:block '>
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
							<button
								onClick={() => setIsOpen(!isOpen)}
								type='button'
								className='inline-flex items-center justify-center text-gray-900 bg-white rounded-md hover:text-gray-900 hover:ring-0 active:ring-0 focus:outline-none'
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

				<Transition
					show={isOpen}
					enter='transition ease-out duration-100 transform'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='transition ease-in duration-75 transform'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					<div
						className='absolute z-50 flex flex-col items-end justify-center w-full gap-4 pr-2 text-3xl font-light uppercase bg-white h-mnav md:hidden text-ruby-400'
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
			</section>
		</nav>
	);
}

export default Nav;
