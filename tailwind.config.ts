
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom color palette
				jet: {
					DEFAULT: '#2E3030',
					100: '#090909',
					200: '#121313',
					300: '#1b1c1c',
					400: '#242525',
					500: '#2e3030',
					600: '#565959',
					700: '#7f8484',
					800: '#aaadad',
					900: '#d4d6d6'
				},
				feldgrau: {
					DEFAULT: '#41524C',
					100: '#0d110f',
					200: '#1a211f',
					300: '#27322e',
					400: '#34423d',
					500: '#41524c',
					600: '#617b72',
					700: '#859f96',
					800: '#aebfb9',
					900: '#d6dfdc'
				},
				ash_gray: {
					DEFAULT: '#9DB1B0',
					100: '#1e2524',
					200: '#3b4a49',
					300: '#596e6d',
					400: '#779291',
					500: '#9db1b0',
					600: '#b0bfbf',
					700: '#c4cfcf',
					800: '#d7dfdf',
					900: '#ebefef'
				},
				night: {
					DEFAULT: '#131313',
					100: '#040404',
					200: '#070707',
					300: '#0b0b0b',
					400: '#0e0e0e',
					500: '#131313',
					600: '#414141',
					700: '#717171',
					800: '#a0a0a0',
					900: '#d0d0d0'
				},
				white: {
					DEFAULT: '#FDFDFE',
					100: '#222243',
					200: '#444486',
					300: '#7575ba',
					400: '#b8b8db',
					500: '#fdfdfe',
					600: '#fcfcfe',
					700: '#fdfdfe',
					800: '#fefefe',
					900: '#fefeff'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
