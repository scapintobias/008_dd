import {
	Craf,
	Manin,
	Saf,
	ManinP,
	Rankin,
	Castiglioni,
	Numeriprimi,
	Migrants,
	Expo,
	Corte,
	Arte,
	Parole,
	Svolta,
	Timeline,
	Syneco,
	Tokyo,
	Ideascudo,
	Mourn,
	Je,
	Ducati,
	Mental,
	Yape,
} from './content';

const createProject = (title, subtitle, type, year, content) => ({
	title,
	subtitle,
	type,
	year,
	content,
});

export const projects = [
	createProject(
		'Mental Coach',
		'Corporate',
		'photography',
		2018,

		Mental()
	),
	createProject(
		'Ducati 1260',
		'Ducati Link App',
		'video',
		2018,

		Ducati()
	),
	createProject(
		'JEMP',
		'Corporate',
		'photography',
		2017,

		Je()
	),
	createProject(
		'Mourn',
		'9/11',
		'poster',
		2016,

		Mourn()
	),
	createProject(
		'Ideascudo',
		'Gruppo Creamoda',
		'logo',
		2016,

		Ideascudo()
	),
	createProject(
		'Tokio 2020',
		'Olympics',
		'logo',
		2016,

		Tokyo()
	),
	createProject(
		'Syneco',
		'Oil',
		'corporate',
		2016,

		Syneco()
	),
	createProject(
		'Brockmann',
		'Timeline',
		'poster',
		2016,

		Timeline()
	),
	createProject(
		'Electoral campaign',
		'Superheroes',
		'photography',
		2015,

		Svolta()
	),
	createProject(
		'Parole Prigioniere',
		'Expo 2015',
		'photography',
		2015,

		Parole()
	),

	createProject(
		'Corte d’Arte',
		'Sbacon',
		'exhibit',
		2015,

		Arte()
	),

	createProject(
		'Corte d’Arte',
		'Gallery',
		'corporate',
		2014,

		Corte()
	),
	createProject(
		'Expo',
		'Milano 2015',
		'logo',
		2013,

		Expo()
	),
	createProject(
		'Migrants',
		'Untold story',
		'print',
		2013,

		Migrants()
	),
	createProject(
		'A century in primes',
		'A handful of papers',
		'print',
		2013,

		Numeriprimi()
	),
	createProject(
		'Achille Castiglioni',
		'Archive',
		'corporate',
		2013,

		Castiglioni()
	),

	createProject(
		'RPA',
		'Studio',
		'corporate',
		2011,

		Rankin()
	),

	createProject(
		'Villa Manin',
		'di Passariano',
		'poster',
		2011,

		ManinP()
	),

	createProject(
		'SAF',
		'Transport',
		'corporate',
		2011,

		Saf()
	),
	createProject(
		'Villa Manin',
		'di Passariano',
		'corporate',
		2011,

		Manin()
	),

	createProject(
		'Craf Aldo Moro',
		'With Maurizio Milani',
		'corporate',
		2008,

		Craf()
	),
];

const createStudy = (title, subtitle, type, year, content) => ({
	title,
	subtitle,
	type,
	year,
	content,
});

export const studies = [createStudy('Yape', 'e-Novia', 'ux', 2018, Yape())];
