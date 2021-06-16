import React from 'react';
import CN from 'classnames';
import { NavLink } from 'react-router-dom';

export const Study = (props) => {
	return (
		<>
			<NavLink key={props.type} to={'/work/study/' + props.to}>
				<div className=' hover:text-ruby-400'>
					<div className='relative h-96'>
						<img
							src={props.img}
							alt='proj'
							className='object-cover w-full h-full '
						/>
					</div>
					<p className='pt-3 text-sm font-normal uppercase'>{props.type}</p>
					<p className='py-1 text-4xl font-light'>{props.title}</p>
					<p className='text-base font-extralight '>{props.subtitle}</p>
				</div>
			</NavLink>
		</>
	);
};

export const StudiesGrid = (props) => {
	return (
		<>
			<div className='flex flex-col pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='pb-8'>
					<p className='text-3xl font-light'>Case Studies</p>
					<p className='text-lg font-extralight'>selected projects</p>
				</div>
				<div className='grid md:grid-cols-2 sm:grid-cols-1 gap-y-16'>
					{props.children}
				</div>
			</div>
		</>
	);
};

export const Main = ({ children }) => (
	<main className='flex flex-col sm:mt-4 md:mt-6 md:mb-18 sm:mb-24 md:mx-6 sm:mx-4'>
		{children}
	</main>
);

export const Par = ({ children }) => (
	<section className='max-w-3xl px-4 py-10 mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl'>
		<div className='mx-auto prose-sm prose sm:prose lg:prose-lg xl:prose-2xl'>
			{children}
		</div>
	</section>
);

export const Sec = ({ title, subtitle }) => (
	<div className='font-sans prose prose-charcoal'>
		<h1>{title}</h1>
		<h2 className='text-charcoal-300 text-subsec'>{subtitle}</h2>
	</div>
);
export const Specimen = (props) => (
	<div className={props.className}>
		<div className='p-6 space-y-4 bg-charcoal-50 bg-opacity-40 rounded-3xl'>
			<img src={props.image} alt='specimen' />
		</div>
	</div>
);

export const Biblio = (props) => (
	<>
		<a
			href={props.link}
			target='_blank'
			rel='noopener noreferrer'
			className='inline-block m-1 transition-shadow duration-300 ease-in-out rounded-lg bg-warmGray-100 text-charcoal-800 t:w-96 sm:w-72 hover:bg-charcoal-800 hover:text-warmGray-50'
		>
			<div className='m-5'>
				<p className='pb-5 font-sans font-medium tracking-tighter sm:text-2xl t:text-4xl'>
					{props.author}
				</p>
				<p className='pb-5 font-serif italic sm:text-2xl t:text-3xl'>
					{props.name}
				</p>
				<p className='font-serif not-italic sm:text-xl t:text-2xl'>
					{props.publication}
				</p>
				<p className='font-serif not-italic sm:text-xl t:text-2xl'>
					{props.pages}
				</p>
				<p className='mt-5 font-serif not-italic sm:text-xl t:text-2xl'>
					{props.year}
				</p>
			</div>
		</a>
	</>
);

export const DescriptionImage = (props) => (
	<div className='w-full py-32'>
		<img src={props.src} alt='alt' className='w-full' />
		<div className='h-10 border-b'>
			<p className='flex flex-col justify-center h-full tracking-wide text-charcoal-200'>
				{props.description}
			</p>
		</div>
	</div>
);

// §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§ //

export const Pic = ({ img, className, imgClass }) => (
	<div className={CN(className)}>
		<img src={img} alt='img' className={CN('w-full', imgClass)}></img>
	</div>
);

export const Img = ({ oneimg, className }) => (
	<div className={CN(' block', className)}>
		<img src={oneimg} alt='img' className='w-full' />
	</div>
);

export const Sub = ({ title }) => (
	<div className='text-blueGray-200'>{title}</div>
);

export const ParImg = ({ oneimg, className }) => (
	<div className={CN('my-3', className)}>
		<img src={oneimg} alt='img' className='w-full' />
	</div>
);

export const TwoImg = ({ image1, image2, className, classNamee }) => (
	<div className='flex flex-row justify-center overflow-visible flex-column-m'>
		<div className='pr0-m pb3-m sm:w-full pr3 w-50'>
			<img src={image1} alt='img' className='w-full'></img>
		</div>
		<div className='pl2 pl0-m sm:w-full w-50'>
			<img src={image2} alt='img' className='w-full'></img>
		</div>
	</div>
);

export const GridImg = ({ image1, image2, className, classNamee }) => (
	<div className='flex flex-row justify-center overflow-hidden flex-column-m mb3'>
		<img src={image1} alt='img' className={CN('mr3 mr0-m', className)}></img>
		<img src={image2} alt='img' className={CN(classNamee)}></img>
	</div>
);

export const FourImg = ({ image1, image2, image3, image4 }) => (
	<div className='flex flex-row justify-center flex-column-m ph35 pt3 ph3-m'>
		<img
			src={image1}
			alt='img'
			className='pr0-m pb3-m sm:w-full pr1 w-25'
		></img>
		<img
			src={image2}
			alt='img'
			className='ph1 ph0-m pb3-m sm:w-full w-25'
		></img>
		<img
			src={image3}
			alt='img'
			className='ph0-m pb3-m sm:w-full ph1 w-25'
		></img>
		<img src={image4} alt='img' className='pl1 pl0-m sm:w-full w-25'></img>
	</div>
);

export const ImgRid = ({ children }) => (
	<div className='grid-3'>{children}</div>
);

export const Head = ({ head }) => (
	<p className='text-sm text-warmGray-400'>{head}</p>
);
export const Tit = ({ tit }) => (
	<p className='py-3 text-2xl font-medium text-warmGray-500'>{tit}</p>
);
export const P = ({ children }) => <p className='pb-3'>{children}</p>;

export const Iltr = ({ img, children }) => (
	<section className='flex flex-col space-x-4 t:flex-row'>
		<div className='w-7/12'>
			<img src={img} alt='alt' className='w-full' />
		</div>
		<div className='sticky t:w-5/12 sm:w-full'>
			<div>{children}</div>
		</div>
	</section>
);

export const Br = () => <br></br>;
