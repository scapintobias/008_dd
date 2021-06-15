import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from './utils';
import { getAllProjects } from './index';

const projects = getAllProjects();

export const ProjectList = (props) => {
	return (
		<>
			{projects
				.filter((project) => (props.type ? project.type === props.type : true))
				.map((project) => (
					<Link
						className=' hover:text-ruby-400 text-charcoal-600'
						key={slugify(project.title + project.type + project.year)}
						to={`/work/${slugify(project.type)}/${project.year}/${slugify(
							project.title
						)}`}
					>
						<div>
							<p className='text-xs uppercase font-extralight'>
								{project.type}
							</p>

							<p className='font-normal tracking-wider uppercase'>
								{project.title}
							</p>
							<p className='text-sm font-extralight '>{project.subtitle}</p>
						</div>
					</Link>
				))}
		</>
	);
};
