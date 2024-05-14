/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'desaturated-dark-cyan': 'hsl(180, 29%, 50%)',
				'light-grayish-cyan': 'hsl(180, 52%, 96%)',
				'lighter-grayish-cyan': 'hsl(180, 31%, 95%)',
				'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
				'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
			},
		},
		fontFamily: {
			LeagueSpartan: ['League Spartan, sans-serif'],
		},
		container: {
			padding: '2rem',
			center: true,
		},
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1200px',
			xl: '1440px',
		},
	},
	plugins: [],
}
