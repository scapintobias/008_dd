import React from 'react';
import { NavLink } from 'react-router-dom';

const Study = (props) => {
	return (
		<>
			<NavLink key={props.type} to={'/work/study/' + props.to}>
				<div className=' hover:text-ruby-400'>
					<div className='relative sm:h-52 md:h-80'>
						<img
							src={props.img}
							alt='proj'
							className='object-cover object-center w-full h-full'
						/>
					</div>
					<div>
						<div className='py-2 text-xs font-thin tracking-wide uppercase'>
							{props.type}
						</div>
						<div className='font-light sm:text-xl t:text-3xl'>
							{props.title}
						</div>
						<div className='font-thin tracking-normal sm:text-sm t:text-lg'>
							{props.subtitle}
						</div>
					</div>
				</div>
			</NavLink>
		</>
	);
};

export const CaseStudies = () => {
	return (
		<div className='flex flex-col py-32 mx-auto'>
			<div className='pb-3 font-normal sm:text-xl t:text-3xl'>
				Selected projects
			</div>
			<div className='grid md:grid-cols-2 sm:grid-cols-1 gap-y-3'>
				<Study
					img='https://upload.wikimedia.org/wikipedia/commons/5/57/Villa_Manin_-_Passariano.jpg'
					to='manin'
					type='Posters'
					title='Villa Manin'
					subtitle='Passariano'
				/>
				<Study
					img='/cases/lima/4.png'
					to='lima'
					type='Wayfinding'
					title='Metro de Lima'
					subtitle='Subway'
				/>
				<Study
					img='/cases/borromeo/borromeo.jpg'
					to='borromeo5'
					type='Branding'
					title='Borromeo5'
					subtitle='A new flavour'
				/>
				<Study
					img='/cases/yape/yape_4.png'
					to='yape'
					type='Branding'
					title='Yape'
					subtitle='e-Novia'
				/>
			</div>
		</div>
	);
};
