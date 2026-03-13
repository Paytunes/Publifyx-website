
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'display': ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'navy': {
					DEFAULT: 'hsl(220 47% 12%)',
					50: 'hsl(220 30% 96%)',
					100: 'hsl(220 30% 90%)',
					200: 'hsl(220 30% 80%)',
					300: 'hsl(220 30% 65%)',
					400: 'hsl(220 35% 45%)',
					500: 'hsl(220 40% 30%)',
					600: 'hsl(220 45% 20%)',
					700: 'hsl(220 47% 15%)',
					800: 'hsl(220 47% 12%)',
					900: 'hsl(220 50% 8%)',
				},
				'brand-orange': {
					DEFAULT: 'hsl(27 100% 50%)',
					50: 'hsl(27 100% 96%)',
					100: 'hsl(27 100% 90%)',
					200: 'hsl(27 100% 80%)',
					300: 'hsl(27 100% 65%)',
					400: 'hsl(27 100% 55%)',
					500: 'hsl(27 100% 50%)',
					600: 'hsl(27 100% 42%)',
					700: 'hsl(27 100% 35%)',
				},
				// Legacy aliases
				'blue-primary': 'hsl(220 47% 12%)',
				'red-accent': '#E11D48',
				'yellow-secondary': '#FF9A33',
				'gray-text': 'hsl(220 15% 15%)',
				'gray-light': 'hsl(220 20% 97%)',
				'purple-primary': 'hsl(271 81% 37%)',
				'purple-secondary': 'hsl(250 95% 76%)',
				'purple-accent': 'hsl(271 91% 65%)',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'count-up': 'count-up 0.6s ease-out forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
