import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sanity/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: "var(--font-inter)",
				heading: "var(--font-barlow)"
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
				}
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'inherit',
						a: {
							color: 'inherit',
							textDecoration: 'none',
							fontWeight: '500',
						},
						h1: {
							color: 'inherit',
							fontWeight: '700',
							fontSize: '2.25em',
							marginTop: '0',
							marginBottom: '0.8888889em',
							lineHeight: '1.1111111',
							fontFamily: 'var(--font-barlow)',
						},
						h2: {
							color: 'inherit',
							fontWeight: '700',
							fontSize: '2.25em',
							marginTop: '2em',
							marginBottom: '1em',
							lineHeight: '1.3333333',
							fontFamily: 'var(--font-barlow)',
						},
						h3: {
							color: 'inherit',
							fontWeight: '600',
							fontSize: '1.25em',
							marginTop: '1.6em',
							marginBottom: '0.6em',
							lineHeight: '1.6',
							fontFamily: 'var(--font-barlow)',
						},
						p: {
							marginTop: '1.25em',
							marginBottom: '1.25em',
							fontFamily: 'var(--font-inter)',
						},
						blockquote: {
							fontWeight: '500',
							fontStyle: 'italic',
							color: 'inherit',
							borderLeftWidth: '0.25rem',
							borderLeftColor: 'inherit',
							quotes: '"\\201C""\\201D""\\2018""\\2019"',
							marginTop: '1.6em',
							marginBottom: '1.6em',
							paddingLeft: '1em',
						},
					},
				},
			},
		}
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;