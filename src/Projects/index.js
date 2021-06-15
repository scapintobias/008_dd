import { slugify } from './utils';
import { projects } from './projects';

export function getAllProjects() {
	return projects;
}

export function getProjectByUrlParams(type, year, slug) {
	return projects.find(
		(project) =>
			slugify(project.title) === slug &&
			project.year === Number(year) &&
			slugify(project.type) === type
	);
}

export function getPrevAndNextProjects({ title, year, type }) {
	if (!title)
		return {
			prev: null,
			next: null,
		};

	const index = projects.findIndex(
		(project) =>
			project.title === title && project.year === year && project.type === type
	);
	let prev = index - 1,
		next = index + 1;
	const currentType = window.sessionStorage.getItem('currentType') || '';

	if (currentType) {
		prev = -1;
		next = projects.length;
		// Find the previous of given type
		for (let i = index - 1; i >= 0; i--) {
			if (projects[i].type === currentType) {
				prev = i;
				break;
			}
		}
		// Find the next of given type
		for (let i = index + 1; i < projects.length; i++) {
			if (projects[i].type === currentType) {
				next = i;
				break;
			}
		}
	}

	return {
		prev: prev >= 0 ? projects[prev] : null,
		next: next < projects.length ? projects[next] : null,
	};
}

export const projectTypes = {
	ux: 'UX/UI',
	wayfinding: 'Wayfinding',
	event: 'Events',
	corporate: 'Branding',
	logo: 'Logo',
	poster: 'Posters',
	video: 'Video',
	exhibit: 'Exhibit',
	photography: 'Photography',
	print: 'Print',
};

export const colorTypes = {
	ux: 'px-3 py-2 text-xs font-semibold leading-none sm:tracking-tighter sm:px-2 sm:py-1 tracking-wide uppercase rounded-full max-w-min bg-orange-400',
	wayfinding:
		'px-3 py-2 text-xs font-semibold leading-none sm:tracking-tighter sm:px-2 sm:py-1 tracking-wide uppercase rounded-full max-w-min bg-red-200',
	event:
		'px-3 py-2 text-xs font-semibold leading-none sm:tracking-tighter sm:px-2 sm:py-1 tracking-wide uppercase rounded-full max-w-min bg-emerald-700 text-white',
	corporate:
		'px-3 py-2 text-xs font-semibold leading-none sm:tracking-tighter sm:px-2 sm:py-1 tracking-wide uppercase rounded-full max-w-min bg-ruby text-white',
	logo: 'px-3 py-2 text-xs font-semibold leading-none sm:tracking-tighter sm:px-2 sm:py-1 tracking-wide uppercase rounded-full max-w-min bg-yellow-300',
	poster:
		'px-3 py-2 text-xs font-semibold leading-none sm:tracking-tighter sm:px-2 sm:py-1 tracking-wide uppercase rounded-full max-w-min bg-blueGray-600 text-white',
	video:
		'px-3 py-2 text-xs font-semibold leading-none sm:tracking-tighter sm:px-2 sm:py-1 tracking-wide uppercase rounded-full max-w-min bg-gray-400',
	exhibit:
		'px-3 py-2 text-xs font-semibold leading-none sm:tracking-tighter sm:px-2 sm:py-1 tracking-wide uppercase rounded-full max-w-min bg-red-800 text-white',
	photography:
		'px-3 py-2 text-xs font-semibold leading-none sm:tracking-tighter sm:px-2 sm:py-1 tracking-wide uppercase rounded-full max-w-min bg-blueGray-200',
	print:
		'px-3 py-2 text-xs font-semibold leading-none sm:tracking-tighter sm:px-2 sm:py-1 tracking-wide uppercase rounded-full max-w-min bg-green-600 text-white',
};
