import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { UserContext, getSettingName } from '../contexts/UserContext';
import { SettingsItem, SettingsItemToggle } from './SettingsItem';

const screens = [
	{
		name: 'Cards',
		route: 'Cards'
	}
];

const SettingsOptions = () => {
	const { settings, toggleSetting } = React.useContext(UserContext);
	const { navigate } = useNavigation();

	return (
		<>
			<View style={styles.container}>
				{screens.map(({ name, route }, index) => (
					<SettingsItem
						key={index}
						name={name}
						onPress={() => navigate(route)}
						borderBottom={index !== screens.length - 1}
					/>
				))}
			</View>
			{settings && (
				<View style={[styles.container, { marginTop: 10 }]}>
					{Object.entries(settings).map(
						([setting, value]: [keyof typeof settings, boolean], index) => (
							<SettingsItemToggle
								key={setting}
								name={getSettingName(setting)}
								value={value}
								toggle={() => toggleSetting(setting)}
								borderBottom={index !== Object.keys(settings).length - 1}
							/>
						)
					)}
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		width: '100%',
		borderRadius: 6,
		overflow: 'hidden',
		shadowOffset: { width: 0, height: 4 },
		shadowColor: '#000000',
		shadowOpacity: 0.1,
		shadowRadius: 6
	}
});

export default SettingsOptions;
