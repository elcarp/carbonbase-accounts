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
			gray: colors.coolGray,
			blue: colors.lightBlue,
			red: colors.rose,
			pink: colors.fuchsia,
			green: {
				500: '#4a7337',
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
