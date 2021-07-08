// tailwind.config.js
module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'

	theme: {
		extend: {
			fontFamily: {
				sans: ['UniversNextPro', 'normal'],
				serif: ['Charter', 'normal'],
			},
			fontSize: {
				'xs': ['0.75rem', '0.85rem'],
				'sm': ['0.875rem', '1.25rem'],
				'base': ['1rem', '1.5rem'],
				'lg': ['1.125rem', '1.75rem'],
				'xl': ['21px', '32px'],
				'2xl': ['1.5rem', '2rem'],
				'3xl': ['1.875rem', '2.25rem'],
				'4xl': ['2.25rem', '2.5rem'],
				'5xl': ['3rem', '1.2'],
				'6xl': ['3.75rem', '1.2'],
				'7xl': ['4.5rem', '1.2'],
				'8xl': ['6rem', '1.2'],
				'9xl': ['8rem', '1.2'],
			},
			fontWeight: {
				'compressed-ultra-light': 110,
				'condensed-ultra-light': 120,
				'ultra-light': 130,
				'extended-ultra-light': 140,
				'compressed-thin': 210,
				'condensed-thin': 220,
				'thin': 230,
				'extended-thin': 240,
				'compressed-light': 310,
				'condensed-light': 320,
				'light': 330,
				'extended-light': 340,
				'compressed': 410,
				'condensed': 420,
				'normal': 430,
				'extended': 440,
				'compressed-medium': 510,
				'condensed-medium': 520,
				'medium': 530,
				'extended-medium': 540,
				'condensed-bold': 620,
				'bold': 630,
				'extended-bold': 640,
				'condensed-heavy': 720,
				'heavy': 730,
				'extended-heavy': 740,
				'condensed-black': 820,
				'black': 830,
				'extended-black': 840,
				'condensed-extra-black': 920,
				'extra-black': 930,
				'extended-extra-black': 940,
			},
			colors: {
				ruby: {
					50: '#FFD1BF',
					100: '#FFBEA6',
					200: '#FFA280',
					300: '#FF6126',
					400: '#FF4500',
				},
				charcoal: {
					50: '#eaeaea',
					100: '#d4d4d4',
					200: '#a9a9a9',
					300: '#949494',
					400: '#7f7f7f',
					500: '#696969',
					600: '#545454',
					700: '#3e3e3e',
					800: '#292929',
					900: '#212121',
					1000: '#1d1d1d',
					1100: '#191919',
					1200: '#101010',
				},
				white: '#fffff7',
			},
		},
		screens: {
			'sm': '320px',
			// => @media (min-width: 320px) { ... }
			't': '600px',
			// => @media (min-width: 768px) { ... }
			'md': '767px',
			// => @media (min-width: 768px) { ... }
			'l': '960px',
			'lg': '1200px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1601px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '2560px',
			// => @media (min-width: 1536px) { ... }
		},
	},
};
