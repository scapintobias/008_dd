import React from 'react';
import { NavLink } from 'react-router-dom';
import { CaseStudies } from '../Components/studies';
import { ProjectList } from '../Projects/list';

export function Work() {
	return (
		<>
			<Collection />
			<CaseStudies />

			<div className='flex flex-col pb-32 mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='flex justify-between pb-8'>
					<p className='text-3xl font-light'>Archive</p>
				</div>
				<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-4'>
					<ProjectList />
				</div>
			</div>
		</>
	);
}

function Collection() {
	return (
		<div className='py-32 mx-auto max-w-7xl sm:px-6 lg:px-8'>
			<div className='flex m-6 font-light sm:flex-col md:flex-row'>
				<div className='pb-12 md:w-6/12'>
					<p className='text-3xl '>Collections</p>
					<p className='text-par font-extralight'>
						An overview of our wide fields of action
					</p>
				</div>
				<section className='flex-col md:space-y-16 sm:space-y-8'>
					<div>
						<NavLink to='/work/logos' className='hover:text-ruby-400'>
							<p className='text-3xl'>Logos & Trademarks</p>
							<p className='text-par font-extralight'>
								What makes a brand memorable and unique
							</p>
						</NavLink>
					</div>
					<div>
						<NavLink to='/work/corporate' className='hover:text-ruby-400'>
							<p className='text-3xl'>Corporate Images</p>
							<p className='text-par font-extralight'>
								Bringing life to a Company
							</p>
						</NavLink>
					</div>
					<div>
						<NavLink to='/work/print' className='hover:text-ruby-400'>
							<p className='text-3xl'>Print</p>
							<p className='text-par font-extralight'>
								Text and images laid on paper
							</p>
						</NavLink>
					</div>
					<div>
						<NavLink to='/work/poster' className='hover:text-ruby-400'>
							<p className='text-3xl'>Posters</p>
							<p className='text-par font-extralight'>
								When you want your message big and loud
							</p>
						</NavLink>
					</div>
				</section>
			</div>
		</div>
	);
}
