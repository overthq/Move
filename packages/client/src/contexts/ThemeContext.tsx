import React from 'react';
// import MapboxGL from '@react-native-mapbox-gl/maps';

type ThemeVariants = 'light' | 'dark';

interface ThemeContextParams {
	theme: ThemeVariants;
	// mapTheme: MapboxGL.StyleURL;
	toggleTheme?: () => void;
}

export const ThemeContext = React.createContext<ThemeContextParams>({
	theme: 'light'
	// mapTheme: MapboxGL.StyleURL.Light
});

type ThemeConstantsType = Record<ThemeVariants, { backgroundColor: string }>;

export const ThemeConstants: ThemeConstantsType = {
	light: {
		backgroundColor: ''
		// mapTheme: MapboxGL.StyleURL.Light
	},
	dark: {
		backgroundColor: ''
		// mapTheme: MapboxGL.StyleURL.Dark
	}
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = React.useState<ThemeVariants>('light');
	const toggleTheme = () => {
		return setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
	};
	// const { mapTheme } = ThemeConstants[theme];
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
