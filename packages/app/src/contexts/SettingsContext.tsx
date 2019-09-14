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

const settingsReducer: React.Reducer<Settings, keyof Settings> = (
	state,
	setting
) => ({ ...state, ...{ [setting]: !setting } });

export const SettingsProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [settings, dispatch] = React.useReducer(settingsReducer, null);

	React.useEffect(() => {
		loadSettings();
	}, []);

	React.useEffect(() => {
		// Might change - immediately persist any changes made to the settings to storage.
		AsyncStorage.setItem('settings', JSON.stringify(settings));
	}, [settings]);

	const checkLocalAuthStatus = async () => {
		const biometricsAvailable = await LocalAuthentication.hasHardwareAsync();
		const fingerprintsAvailable = await LocalAuthentication.isEnrolledAsync();
		return biometricsAvailable && fingerprintsAvailable;
	};

	const loadSettings = async () => {
		let settings: Settings;
		try {
			settings = JSON.parse(await AsyncStorage.getItem('settings'));
		} catch (error) {
			// The user does not have settings yet - check if they have local auth
			settings = {};
			const hasLocalAuth = await checkLocalAuthStatus();
			// If they do, turn it on by default.
			// TODO(koredefashokun): Make it false if the user has the hardware capability, but hasn't saved any fingerprints or facial scans
			// That way, we can tell them to set it up in their device settings if they try to turn it on.
			if (hasLocalAuth) settings.localAuth = true;
		} finally {
			Object.entries(settings).forEach(([setting]) =>
				dispatch(setting as keyof Settings)
			);
		}
	};

	const toggleSetting = (setting: keyof Settings) => dispatch(setting);

	React.useEffect(() => {
		checkLocalAuthStatus();
		loadSettings();
	}, []);

	return (
		<SettingsContext.Provider
			value={{ settings, toggleSetting }}
			{...{ children }}
		/>
	);
};
