import React from 'react';
import { NavLink } from 'react-router-dom';

const Study = (props) => {
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
						<p className='pt-3 text-xs uppercase font-extralight'>
							{props.type}
						</p>
						<p className='font-light sm:text-xl t:text-3xl'>{props.title}</p>
						<p className='sm:text-sm t:text-lg font-extralight'>
							{props.subtitle}
						</p>
					</div>
				</div>
			</NavLink>
		</>
	);
};

export const CaseStudies = () => {
	return (
		<div className='flex flex-col py-32 mx-auto max-w-7xl'>
			<div className='pb-16 sm:px-4 xl:px-0'>
				<p className='font-medium sm:text-xl t:text-3xl'>Case Studies</p>
				<p className='sm:text-sm t:text-lg font-extralight'>
					Selected projects
				</p>
			</div>
			<div className='grid l:grid-cols-2 sm:grid-cols-1 gap-y-3'>
				<Study
					img='/img/lidar.jpg'
					to='yape'
					type='User experience'
					title='Yape'
					subtitle='e-Novia'
				/>
				<Study
					img='/cat/lima/4.png'
					to='lima'
					type='Waifinding'
					title='Metro de Lima'
					subtitle='Subway'
				/>
				<Study
					img='/cat/borromeo/borromeo.jpg'
					to='borromeo5'
					type='Branding'
					title='Borromeo5'
					subtitle='A new flavour'
				/>
				<Study
					img='/cat/yape/yape_4.png'
					to='yape-srl'
					type='Branding'
					title='Yape'
					subtitle='e-Novia'
				/>
			</div>
		</div>
	);
};
