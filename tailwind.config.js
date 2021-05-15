// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			indigo: colors.indigo,
			red: colors.rose,
			yellow: colors.amber,
			gray: colors.coolGray,
			blue: colors.lightBlue,
			red: colors.rose,
			pink: colors.fuchsia,
			'chalet-green': {
				DEFAULT: '#4A7337',
				50: '#C1DBB4',
				100: '#B2D3A3',
				200: '#95C381',
				300: '#79B25E',
				400: '#609648',
				500: '#4A7337',
				600: '#345127',
				700: '#1E2E16',
				800: '#070C06',
				900: '#000000',
			},
		},
		fontFamily: {
			sans: ['Lato', 'sans-serif'],
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
}
