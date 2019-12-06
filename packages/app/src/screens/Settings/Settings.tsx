import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Switch,
	ViewStyle
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { UserContext, getSettingName } from '../../contexts/UserContext';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

const settingScreens = [
	{
		name: 'Cards',
		routeName: 'Cards'
	}
];

interface SettingsItemProps {
	name: string;
	onPress?: () => void;
	style?: ViewStyle;
}

const SettingsItem = ({ name, onPress }: SettingsItemProps) => (
	<TouchableOpacity
		activeOpacity={0.7}
		style={styles.itemContainer}
		{...{ onPress }}
	>
		<Text style={styles.itemName}>{name}</Text>
		<Feather name='chevron-right' size={18} color='#545454' />
	</TouchableOpacity>
);

interface SettingsItemToggleProps {
	name: string;
	value: boolean;
	toggle(): void;
	style?: ViewStyle;
}

const SettingsItemToggle = ({
	name,
	value,
	toggle,
	style
}: SettingsItemToggleProps) => (
	<View style={[styles.itemContainer, style]}>
		<Text style={styles.itemName}>{name}</Text>
		<Switch
			value={value}
			onValueChange={toggle}
			trackColor={{ true: '#505050', false: '#F2F2F7' }}
			thumbColor='#FFFFFF'
		/>
	</View>
);

interface SettingsProps {
	navigation: StackNavigationProp<any>;
}

const Settings = ({ navigation }: SettingsProps) => {
	const { user, logOut, settings, toggleSetting } = React.useContext(
		UserContext
	);

	// Figure out the right way to handle the log out.

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
						onPress={() => navigation.navigate(routeName)}
					/>
				))}
				{settings &&
					Object.entries(settings).map(([setting, value], index) => (
						<SettingsItemToggle
							key={setting}
							name={getSettingName(setting as keyof typeof settings)}
							value={value}
							toggle={() => toggleSetting(setting as keyof typeof settings)}
							style={
								index === Object.keys(settings).length - 1 && {
									borderBottomWidth: 0
								}
							}
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
		backgroundColor: '#E8E8E8'
	},
	itemContainer: {
		width: '100%',
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#FFFFFF',
		borderColor: '#D3D3D3',
		borderBottomWidth: 0.5
	},
	itemName: {
		fontSize: 16,
		fontWeight: '500',
		color: '#161616'
	},
	titleContainer: {
		backgroundColor: '#505050',
		alignSelf: 'center',
		width: width - 20,
		borderRadius: 6,
		marginVertical: 10,
		padding: 10,
		shadowOffset: { width: 0, height: 4 },
		shadowColor: '#000000',
		shadowOpacity: 0.1,
		shadowRadius: 6
	},
	titleName: {
		fontSize: 20,
		color: '#D3D3D3',
		fontWeight: 'bold'
	},
	titleInfo: {
		color: '#D3D3D3',
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
		alignSelf: 'center',
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
