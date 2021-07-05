import React from 'react';
//import CN from 'classnames';
import { NavLink } from 'react-router-dom';

export const Title = (props) => {
	return (
		<div className='flex items-center justify-center w-full h-title'>
			<div className='absolute w-full text-charcoal-500 bottom-6'>
				<div className='max-w-screen-md sm:mx-4 md:mx-auto'>
					<p className='font-normal md:pb-1 sm:text-3xl t:text-5xl'>
						{props.title}
					</p>
					<p className='font-thin t:text-4xl sm:text-2xl'>{props.subtitle}</p>
				</div>
			</div>
			<img src={'/cases' + props.src} alt={props.title} className='w-2/3' />
		</div>
	);
};

export const Study = (props) => {
	return (
		<>
			<NavLink key={props.type} to={'/work/study/' + props.to}>
				<div className=' hover:text-ruby-400'>
					<div className='relative sm:h-80 md:h-96'>
						<img
							src={props.img}
							alt='proj'
							className='object-cover w-full h-full'
						/>
					</div>
					<div className='sm:px-4 xl:px-0'>
						<p className='pt-3 text-xs font-thin tracking-wide uppercase'>
							{props.type}
						</p>
						<p className='font-light sm:text-xl t:text-3xl'>{props.title}</p>
						<p className='font-thin tracking-normal sm:text-sm t:text-lg'>
							{props.subtitle}
						</p>
					</div>
				</div>
			</NavLink>
		</>
	);
};

export const StudiesGrid = (props) => {
	return (
		<div className='flex flex-col py-32 mx-auto max-w-7xl'>
			<div className='pb-16 sm:px-4 xl:px-0'>
				<p className='font-normal sm:text-xl t:text-3xl'>Selected projects</p>
			</div>
			<div className='grid l:grid-cols-2 sm:grid-cols-1 gap-y-3'>
				{props.children}
			</div>
		</div>
	);
};

export const Par = ({ children }) => (
	<section className='max-w-screen-md py-10 mx-auto sm:px-4 l:px-0 sm:py-12 '>
		<div className='mx-auto font-thin tracking-normal'>{children}</div>
	</section>
);
