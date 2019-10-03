import React from 'react';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import * as LocalAuthentication from 'expo-local-authentication';
import { User } from '@move/core';
import { getUserData, removeUserData } from '../helpers';

interface Settings {
	localAuth?: boolean;
}

interface UserContextValue {
	user: User | null;
	settings: Settings | null;
	toggleSetting(setting: keyof Settings): void;
	logOut(): void;
}

export const UserContext = React.createContext<UserContextValue>({
	user: null,
	settings: null,
	toggleSetting: () => {},
	logOut: () => {}
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

const Provider = ({ children }: { children: React.ReactNode }) => {
	const [loading, setLoading] = React.useState(true);
	const [user, setUser] = React.useState<User | null>(null);
	const [settings, dispatch] = React.useReducer(settingsReducer, null);

	React.useEffect(() => {
		fetchUser();
		checkLocalAuthStatus();
		loadSettings();
	}, []);

	React.useEffect(() => {
		settings && AsyncStorage.setItem('settings', JSON.stringify(settings));
	}, [settings]);

	const fetchUser = async () => setUser(await getUserData());

	const logOut = React.useCallback(async () => {
		await removeUserData();
		return setUser(null);
	}, [setUser]);

	// TODO(koredefashokun):
	// For the localAuth setting, make sure that if the setting is being turned off,
	// The user turning it off has to "sign off" on the deactivation.
	// i.e. The user has to actually verify their authenticity.
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
			setLoading(false);
		}
	};

	return (
		<UserContext.Provider value={{ user, logOut, settings, toggleSetting }}>
			{loading ? <AppLoading /> : children}
		</UserContext.Provider>
	);
};

export const UserProvider = React.memo(Provider);
