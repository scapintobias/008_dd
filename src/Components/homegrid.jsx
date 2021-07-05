import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Homegrid() {
	return (
		<div className='w-full py-28'>
			<div className='flex lg:flex-row sm:flex-col '>
				<NavLink
					to='/work/study/borromeo5'
					className='p-2 border-opacity-50 sm:border-t lg:w-3/12 lg:border-t-0 lg:border-b group border-charcoal-100 lg:border-r hover:bg-charcoal-50 lg:h-64 sm:h-52'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>
						corporate image
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						Borromeo
					</p>
					<p className='pt-3 text-lg font-thin tracking-normal group-hover:text-ruby-400'>
						Sparkly bar in the heart of Milan
					</p>
				</NavLink>
				<NavLink
					to='/'
					className='p-2 border-t border-b border-opacity-50 lg:w-5/12 group border-charcoal-100 hover:bg-charcoal-50 lg:border-r lg:h-64 sm:h-52'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>
						1st Child
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						2nd child
					</p>
					<p className='pt-3 text-lg font-thin tracking-normal group-hover:text-ruby-400'>
						3rd child
					</p>
				</NavLink>
				<NavLink
					to='/'
					className='p-2 border-b border-opacity-50 lg:border-t-0 lg:w-4/12 group border-charcoal-100 hover:bg-charcoal-50 lg:h-64 sm:h-52'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>
						1st Child
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						2nd child
					</p>
					<p className='pt-3 text-lg font-thin tracking-normal group-hover:text-ruby-400'>
						3rd child
					</p>
				</NavLink>
			</div>
			<div className='flex lg:flex-row sm:flex-col'>
				<NavLink
					to='/'
					className='p-2 border-b border-opacity-50 lg:w-5/12 group border-charcoal-100 hover:bg-charcoal-50 lg:border-l lg:border-r lg:h-64 sm:h-52'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>
						1st Child
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						2nd child
					</p>
					<p className='pt-3 text-lg font-thin tracking-normal group-hover:text-ruby-400'>
						3rd child
					</p>
				</NavLink>
				<NavLink
					to='/work/logos'
					className='p-2 border-opacity-50 lg:border-b-0 sm:border-b lg:w-4/12 group border-charcoal-100 hover:bg-charcoal-50 lg:border-r lg:h-64 sm:h-52'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>
						collection
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						Logos & Trademarks
					</p>
					<p className='pt-3 text-lg font-thin tracking-normal group-hover:text-ruby-400'>
						What makes a brand memorable and unique
					</p>
				</NavLink>
				<NavLink
					to='/'
					className='p-2 border-b border-opacity-50 lg:w-4/12 group border-charcoal-100 hover:bg-charcoal-50 lg:border-r lg:h-64 sm:h-52'
				>
					<p className='text-xs font-thin tracking-normal uppercase'>
						1st Child
					</p>
					<p className='pt-8 text-3xl font-light group-hover:text-ruby-400'>
						2nd child
					</p>
					<p className='pt-3 text-lg font-thin tracking-normal group-hover:text-ruby-400'>
						3rd child
					</p>
				</NavLink>
			</div>
		</div>
	);
}
