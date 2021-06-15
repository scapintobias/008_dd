import React from 'react';
import { Link } from 'react-router-dom';

import { slugify } from './utils';
import { ArrowLeft, ArrowRight } from './components';
import { projectTypes, getPrevAndNextProjects } from './index';

export const ProjectNavigation = (props) => {
	const { title, subtitle, type, year } = props.project;
	const { prev, next } = getPrevAndNextProjects(props.project);

	return (
		<>
			<div className='fixed bottom-0 z-30 flex items-center w-full h-screen bg-white border-t md:h-12 sm:h-16 '>
				<div className='flex flex-row justify-between w-full px-4 '>
					{prev && (
						<Link
							to={`/work/${slugify(prev.type)}/${prev.year}/${slugify(
								prev.title
							)}?prev`}
							className='flex items-center justify-start pr-4'
						>
							<ArrowLeft />
						</Link>
					)}

					<div className='flex items-center flex-grow gap-4 sm:justify-between'>
						<div className='flex sm:gap-1 md:gap-4 sm:flex-col md:flex-row'>
							<div className='text-sm font-medium tracking-wider uppercase'>
								{title}
							</div>
							<div className='text-sm font-medium tracking-wider uppercase '>
								{subtitle}
							</div>
						</div>
						<div className='flex md:gap-4 md:flex-row sm:flex-col sm:items-end'>
							<div className='text-sm font-medium tracking-wider uppercase'>
								{projectTypes[type]}
							</div>
							<div className='text-sm font-medium tracking-wider uppercase'>
								{year}
							</div>
						</div>
					</div>

					{next && (
						<Link
							to={`/work/${slugify(next.type)}/${next.year}/${slugify(
								next.title
							)}?next`}
							className='flex items-center pl-4'
						>
							<ArrowRight />
						</Link>
					)}
				</div>
			</div>
		</>
	);
};
