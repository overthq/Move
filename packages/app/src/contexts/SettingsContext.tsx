import React from 'react';
import { AsyncStorage } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

interface Settings {
	localAuth?: boolean;
}

interface SettingsContextValue {
	settings: Settings | null;
	toggleSetting(setting: keyof Settings): void;
}

export const SettingsContext = React.createContext<SettingsContextValue>({
	settings: null,
	toggleSetting: () => {}
});

const settingsReducer: React.Reducer<
	Settings | null,
	Record<keyof Settings, boolean>
> = (state, setting) => ({ ...state, ...setting });

export const getSettingName = (setting: keyof Settings) => {
	switch (setting) {
		case 'localAuth':
			return 'Local Authentication';
		default:
			return '';
	}
};

export const SettingsProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [settings, dispatch] = React.useReducer(settingsReducer, null);

	React.useEffect(() => {
		checkLocalAuthStatus();
		loadSettings();
	}, []);

	React.useEffect(() => {
		settings && AsyncStorage.setItem('settings', JSON.stringify(settings));
	}, [settings]);

	const toggleSetting = (setting: keyof Settings) =>
		settings && dispatch({ [setting]: !settings[setting] });

	const checkLocalAuthStatus = async () => {
		const biometricsAvailable = await LocalAuthentication.hasHardwareAsync();
		const fingerprintsAvailable = await LocalAuthentication.isEnrolledAsync();
		return biometricsAvailable && fingerprintsAvailable;
	};

	const loadSettings = async () => {
		let settings: Settings = {};
		try {
			const rawSettings = await AsyncStorage.getItem('settings');
			if (!rawSettings) throw new Error('Settings not found');
			settings = await JSON.parse(rawSettings);
		} catch (error) {
			const hasLocalAuth = await checkLocalAuthStatus();
			// TODO(koredefashokun):
			// Make it false if the user has the hardware capability, but hasn't saved any fingerprints or facial scans
			// That way, we can tell them to set it up in their device settings if they try to turn it on.
			if (hasLocalAuth) settings.localAuth = true;
		} finally {
			Object.entries(settings).forEach(
				([setting, value]: [(keyof typeof settings), boolean]) =>
					dispatch({ [setting]: value })
			);
		}
	};

	return (
		<SettingsContext.Provider
			value={{ settings, toggleSetting }}
			{...{ children }}
		/>
	);
};
