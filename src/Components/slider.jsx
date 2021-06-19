import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Slider({ children }) {
	return (
		<Carousel
			plugins={[
				'infinite',

				{
					resolve: autoplayPlugin,
					options: {
						interval: 3000,
					},
				},
			]}
			animationSpeed={600}
		>
			{children}
		</Carousel>
	);
}
