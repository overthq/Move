import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { UserContext, getSettingName } from '../../contexts/UserContext';
import {
	SettingsItem,
	SettingsItemToggle
} from '../../components/SettingsItem';

const { width } = Dimensions.get('window');

const settingScreens = [
	{
		name: 'Cards',
		routeName: 'Cards'
	}
];

const Settings = () => {
	const { user, logOut, settings, toggleSetting } = React.useContext(
		UserContext
	);
	const { navigate } = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.titleName}>
					{user.firstName} {user.lastName}
				</Text>
				<Text style={styles.titleInfo}>{user.phoneNumber}</Text>
			</View>
			<View style={styles.settingsOptionsContaner}>
				{settingScreens.map(({ name, routeName }, index) => (
					<SettingsItem
						key={index}
						name={name}
						onPress={() => navigate(routeName)}
						borderBottom={index !== settingScreens.length - 1}
					/>
				))}
			</View>
			<View style={styles.settingsOptionsContaner}>
				{settings &&
					Object.entries(
						settings
					).map(([setting, value]: [keyof typeof settings, boolean], index) => (
						<SettingsItemToggle
							key={setting}
							name={getSettingName(setting)}
							value={value}
							toggle={() => toggleSetting(setting)}
							borderBottom={index !== Object.keys(settings).length - 1}
						/>
					))}
			</View>
			<TouchableOpacity style={styles.actionButton} onPress={logOut}>
				<Text style={styles.actionButtonText}>Log Out</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#E8E8E8'
	},
	titleContainer: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: width - 20,
		marginVertical: 10
	},
	titleName: {
		fontSize: 20,
		color: '#161616',
		fontWeight: '500'
	},
	titleInfo: {
		color: '#505050',
		fontSize: 16
	},
	settingsOptionsContaner: {
		alignSelf: 'center',
		width: width - 20,
		borderRadius: 6,
		overflow: 'hidden',
		shadowOffset: { width: 0, height: 4 },
		shadowColor: '#000000',
		shadowOpacity: 0.1,
		shadowRadius: 6
	},
	actionButton: {
		width: width - 20,
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C92614',
		marginTop: 10,
		padding: 10
	},
	actionButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
});

export default Settings;
