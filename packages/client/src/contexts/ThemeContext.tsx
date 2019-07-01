import React from 'react';

type ThemeVariants = 'light' | 'dark';

interface ThemeContextParams {
	theme: ThemeVariants;
	toggleTheme?: () => void;
}

export const ThemeContext = React.createContext<ThemeContextParams>({
	theme: 'light'
});

type ThemeConstantsType = Record<ThemeVariants, { [key: string]: string }>;

export const ThemeConstants: ThemeConstantsType = {
	light: {
		backgroundColor: ''
	},
	dark: {
		backgroundColor: ''
	}
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = React.useState<ThemeVariants>('light');
	const toggleTheme = () => {
		return setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
