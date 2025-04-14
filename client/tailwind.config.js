/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'wawa-red': {
  				50: '#fff1f1',
  				100: '#ffe1e1',
  				200: '#ffc7c7',
  				300: '#ffa0a0',
  				400: '#ff6b6b',
  				500: '#f83a3a',
  				600: '#e51b1b',
  				700: '#c11414',
  				800: '#9f1616',
  				900: '#831a1a',
  			},
  			'wawa-yellow': {
  				50: '#fffbeb',
  				100: '#fff4c6',
  				200: '#ffe985',
  				300: '#ffd744',
  				400: '#ffc412',
  				500: '#f0aa0b',
  				600: '#cc8506',
  				700: '#a36208',
  				800: '#854d0e',
  				900: '#713f12',
  			},
  			'wawa-blue': {
  				50: '#f0f9ff',
  				100: '#e0f2fe',
  				200: '#b9e6fe',
  				300: '#7cd4fd',
  				400: '#36bffa',
  				500: '#0ca5e9',
  				600: '#0284c7',
  				700: '#036ba1',
  				800: '#075985',
  				900: '#0c4a6e',
  			},
  			'wawa-green': {
  				50: '#f0fdf4',
  				100: '#dcfce7',
  				200: '#bbf7d0',
  				300: '#86efac',
  				400: '#4ade80',
  				500: '#22c55e',
  				600: '#16a34a',
  				700: '#15803d',
  				800: '#166534',
  				900: '#14532d',
  			},
  			'wawa-orange': {
  				50: '#fff7ed',
  				100: '#ffedd5',
  				200: '#fed7aa',
  				300: '#fdba74',
  				400: '#fb923c',
  				500: '#f97316',
  				600: '#ea580c',
  				700: '#c2410c',
  				800: '#9a3412',
  				900: '#7c2d12',
  			},
  			'wawa-black': {
  				50: '#f8f8f8',
  				100: '#e9e9e9',
  				200: '#d4d4d4',
  				300: '#a6a6a6',
  				400: '#737373',
  				500: '#525252',
  				600: '#404040',
  				700: '#262626',
  				800: '#171717',
  				900: '#0a0a0a',
  			},
  			'wawa-success': {
  				100: '#dcfce7',
  				500: '#22c55e',
  				900: '#14532d',
  			},
  			'wawa-error': {
  				100: '#fee2e2',
  				500: '#ef4444',
  				900: '#7f1d1d',
  			},
  		},
  		fontFamily: {
  			'wawa-display': ['Montserrat', 'sans-serif'],
  			'wawa-heading': ['Poppins', 'sans-serif'],
  			'wawa-body': ['Open Sans', 'sans-serif'],
  		},
  		fontSize: {
  			'display-2xl': ['4.5rem', { lineHeight: '1.1' }],
  			'display-xl': ['3.75rem', { lineHeight: '1.1' }],
  			'display-lg': ['3rem', { lineHeight: '1.1' }],
  			'display-md': ['2.25rem', { lineHeight: '1.2' }],
  			'display-sm': ['1.875rem', { lineHeight: '1.2' }],
  			'display-xs': ['1.5rem', { lineHeight: '1.3' }],
  			'heading-xl': ['2.25rem', { lineHeight: '1.3' }],
  			'heading-lg': ['1.875rem', { lineHeight: '1.3' }],
  			'heading-md': ['1.5rem', { lineHeight: '1.4' }],
  			'heading-sm': ['1.25rem', { lineHeight: '1.4' }],
  			'heading-xs': ['1.125rem', { lineHeight: '1.5' }],
  			'body-lg': ['1.125rem', { lineHeight: '1.6' }],
  			'body-md': ['1rem', { lineHeight: '1.6' }],
  			'body-sm': ['0.875rem', { lineHeight: '1.5' }],
  			'body-xs': ['0.75rem', { lineHeight: '1.5' }],
  		},
  	}
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/forms')],
} 