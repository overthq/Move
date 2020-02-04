import React from 'react';
import { View, StyleSheet } from 'react-native';
import { UserContext, getSettingName } from '../contexts/UserContext';
import { SettingsItem, SettingsItemToggle } from './SettingsItem';

interface SettingsOptionsProps {
	options: {
		name: string;
		action(): void;
	}[];
}

const SettingsOptions: React.FC<SettingsOptionsProps> = ({ options }) => {
	const { settings, toggleSetting } = React.useContext(UserContext);

	return (
		<>
			<View style={styles.container}>
				{options.map(({ name, action }, index) => (
					<SettingsItem
						key={index}
						name={name}
						onPress={action}
						borderBottom={index !== options.length - 1}
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
		backgroundColor: '#000000',
		elevation: 3,
		shadowOpacity: 0.5,
		shadowRadius: 6
	}
});

export default SettingsOptions;
