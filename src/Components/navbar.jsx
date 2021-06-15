import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='z-50 w-screen p-2 -top-20'>
			<nav>
				<div className='mx-auto max-w-7xl'>
					<div className='flex items-center justify-between h-8'>
						<div className='flex items-center justify-between md:min-w-full'>
							<NavLink className='flex-shrink-0' to='/'>
								<span className='font-black tracking-tighter text-ruby-400 t:text-4xl sm:text-2xl'>
									DisciplineDesign
								</span>
							</NavLink>
							<div className='hidden md:block '>
								<div className='flex items-baseline justify-between ml-10 space-x-3'>
									<NavLink
										to='/work'
										className='px-3 py-2 font-medium leading-none tracking-wide uppercase text-ruby-400 hover:text-charcoal-800 '
									>
										Work
									</NavLink>

									{/* <NavLink
										to='/resources'
										className='px-3 py-2 font-medium leading-none tracking-wide uppercase text-ruby-400 hover:text-charcoal-800'
									>
										Resources
									</NavLink> */}
									<NavLink
										to='/about'
										className='px-3 py-2 font-medium leading-none tracking-wide uppercase text-ruby-400 hover:text-charcoal-800'
									>
										About
									</NavLink>

									<NavLink
										to='/contacts'
										className='px-3 py-2 font-medium leading-none tracking-wide uppercase text-ruby-400 hover:text-charcoal-800'
									>
										Contacts
									</NavLink>
								</div>
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

				<Transition
					show={isOpen}
					enter='transition ease-out duration-100 transform'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='transition ease-in duration-75 transform'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					{(ref) => (
						<div
							className='absolute right-0 w-full bg-white md:hidden '
							id='mobile-menu'
						>
							<div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
								<NavLink
									to='/work'
									className='block w-full px-4 py-4 text-lg font-medium text-right rounded-full text-ruby-400 hover:bg-white hover:text-black'
									onClick={() => setIsOpen(!isOpen)}
								>
									Work
								</NavLink>

								{/* <NavLink
									to='/resources'
									className='block w-full px-4 py-4 text-lg font-medium text-right rounded-full text-ruby-400 hover:bg-white hover:text-black'
									onClick={() => setIsOpen(!isOpen)}
								>
									Resources
								</NavLink> */}

								<NavLink
									to='/about'
									className='block w-full px-4 py-4 text-lg font-medium text-right rounded-full text-ruby-400 hover:bg-white hover:text-black'
									onClick={() => setIsOpen(!isOpen)}
								>
									About
								</NavLink>

								<NavLink
									to='/contacts'
									className='block w-full px-4 py-4 text-lg font-medium text-right rounded-full text-ruby-400 hover:bg-white hover:text-black'
									onClick={() => setIsOpen(!isOpen)}
								>
									Contacts
								</NavLink>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Nav;
