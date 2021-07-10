import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Homegrid() {
	return (
		<div className='pb-20 '>
			<div className='flex md:flex-row sm:flex-col '>
				<NavLink
					to='/borromeo5'
					className='border-opacity-50 sm:py-2 md:p-2 md:w-3/12 group border-charcoal-100 hover:bg-charcoal-50 md:h-64 sm:h-52 md:border-r md:border-b-0 md:border-t-0 sm:border-t sm:border-b'
				>
					<p className='text-xs font-thin tracking-normal uppercase '>
						corporate image
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						Borromeo
					</p>
					<p className='pt-3 font-thin tracking-normal text-md group-hover:text-ruby-400'>
						Sparkly bar in the heart of Milan
					</p>
				</NavLink>

				<NavLink
					to='/logos'
					className='border-opacity-50 sm:py-2 md:p-2 md:w-5/12 group border-charcoal-100 hover:bg-charcoal-50 md:h-64 sm:h-52 md:border-r md:border-b-0 sm:border-b'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>
						collection
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						Logos & Trademarks
					</p>
					<p className='pt-3 font-thin tracking-normal text-md group-hover:text-ruby-400'>
						What makes a brand memorable and unique
					</p>
				</NavLink>

				<NavLink
					to='/yape'
					className='border-opacity-50 sm:py-2 md:p-2 md:w-4/12 group border-charcoal-100 hover:bg-charcoal-50 md:h-64 sm:h-52 sm:border-b md:border-b-0 md:border-r'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>
						corporate image
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						Yape
					</p>
					<p className='pt-3 font-thin tracking-normal text-md group-hover:text-ruby-400'>
						New identity for a very smart robot
					</p>
				</NavLink>
			</div>
			<div className='flex md:flex-row sm:flex-col'>
				<NavLink
					to='/lima'
					className='border-opacity-50 sm:py-2 md:p-2 md:w-5/12 group border-charcoal-100 hover:bg-charcoal-50 md:h-64 sm:h-52 md:border-r md:border-l md:border-b-0 sm:border-b'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>
						Wayfinding
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						Metro de Lima
					</p>
					<p className='pt-3 font-thin tracking-normal text-md group-hover:text-ruby-400'>
						New identity and wayfinding with Samuel Iuri
					</p>
				</NavLink>
				<NavLink
					to='/manin'
					className='border-opacity-50 sm:py-2 md:p-2 md:w-3/12 group border-charcoal-100 hover:bg-charcoal-50 md:h-64 sm:h-52 md:border-r md:border-b-0 md:border-t-0 sm:border-t sm:border-b'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>Posters</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						Villa Manin
					</p>
					<p className='pt-3 font-thin tracking-normal text-md group-hover:text-ruby-400'>
						Art Exhibitions
					</p>
				</NavLink>

				<NavLink
					to='/'
					className='border-opacity-50 sm:py-2 md:p-2 md:w-4/12 group border-charcoal-100 hover:bg-charcoal-50 md:h-64 sm:h-52 md:border-b-0 sm:border-b'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>
						1st Child
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						2nd child
					</p>
					<p className='pt-3 font-thin tracking-normal text-md group-hover:text-ruby-400'>
						3rd child
					</p>
				</NavLink>
			</div>
		</div>
	);
}
