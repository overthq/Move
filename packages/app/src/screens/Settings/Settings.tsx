import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Switch
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { UserContext, getSettingName } from '../../contexts/UserContext';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

const settingScreens = [
	{
		name: 'Credit Cards',
		routeName: 'CreditCards'
	}
];

interface SettingsItemProps {
	name: string;
	onPress?: () => void;
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
}

const SettingsItemToggle = ({
	name,
	value,
	toggle
}: SettingsItemToggleProps) => (
	<View style={styles.itemContainer}>
		<Text style={styles.itemName}>{name}</Text>
		<Switch
			value={value}
			onValueChange={toggle}
			trackColor={{ true: '#505050', false: '#F2F2F7' }}
		/>
	</View>
);

const UserDetails = () => {
	const { user } = React.useContext(UserContext);
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.titleName}>
				{user.firstName} {user.lastName}
			</Text>
			<Text style={styles.titleInfo}>{user.phoneNumber}</Text>
		</View>
	);
};

interface SettingsProps {
	navigation: StackNavigationProp<any>;
}

const Settings = ({ navigation }: SettingsProps) => {
	const { logOut, settings, toggleSetting } = React.useContext(UserContext);

	return (
		<View style={{ flex: 1, backgroundColor: '#E8E8E8' }}>
			<UserDetails />
			<View
				style={{
					alignSelf: 'center',
					width: width - 20,
					borderRadius: 6,
					overflow: 'hidden'
				}}
			>
				{settingScreens.map(({ name, routeName }, index) => (
					<SettingsItem
						key={index}
						name={name}
						onPress={() => navigation.navigate(routeName)}
					/>
				))}
				{settings &&
					Object.entries(settings).map(([setting, value]) => (
						<SettingsItemToggle
							key={setting}
							name={getSettingName(setting as keyof typeof settings)}
							value={value}
							toggle={() => toggleSetting(setting as keyof typeof settings)}
						/>
					))}
			</View>
			<TouchableOpacity
				style={[
					styles.itemContainer,
					{
						width: width - 20,
						borderRadius: 6,
						alignSelf: 'center',
						justifyContent: 'center',
						backgroundColor: '#C92614',
						marginTop: 10
					}
				]}
				onPress={logOut}
			>
				<Text style={[styles.itemName, { color: '#FFFFFF' }]}>Log Out</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
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
		padding: 10
	},
	titleName: {
		fontSize: 20,
		color: '#777777',
		fontWeight: 'bold'
	},
	titleInfo: {
		color: '#777777',
		fontSize: 16
	}
});

export default Settings;
