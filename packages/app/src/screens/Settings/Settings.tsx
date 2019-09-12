import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	StyleSheet
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { NavigationScreenProps } from 'react-navigation';
import { UserContext } from '../../contexts/UserContext';

const settingScreens = [
	{
		name: 'Credit Cards',
		routeName: 'CreditCards'
	}
];

interface SettingsItemProps {
	name: string;
	onPress(): void;
}

const SettingsItem = ({ name, onPress }: SettingsItemProps) => (
	<TouchableOpacity style={styles.itemContainer} {...{ onPress }}>
		<Text style={styles.itemName}>{name}</Text>
		<Feather name='chevron-right' size={18} color='#545454' />
	</TouchableOpacity>
);

const LogoutButton = () => {
	const { logOut } = React.useContext(UserContext);
	return (
		<TouchableOpacity
			style={[styles.itemContainer, { justifyContent: 'center' }]}
			onPress={logOut}
		>
			<Text style={[styles.itemName, { color: '#E83C3C' }]}>Log Out</Text>
		</TouchableOpacity>
	);
};

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

const Settings = ({ navigation }: NavigationScreenProps) => (
	<View style={{ flex: 1, backgroundColor: '#232323' }}>
		<FlatList
			data={settingScreens}
			keyExtractor={page => page.routeName}
			ListHeaderComponent={UserDetails}
			ListFooterComponent={LogoutButton}
			renderItem={({ item, index }) => (
				<SettingsItem
					key={index}
					name={item.name}
					onPress={() => navigation.navigate(item.routeName)}
				/>
			)}
		/>
	</View>
);

const styles = StyleSheet.create({
	itemContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#191919',
		borderColor: '#545454',
		borderBottomWidth: 0.5
	},
	itemName: {
		fontSize: 16,
		fontWeight: '500',
		color: '#D3D3D3'
	},
	titleContainer: {
		padding: 10
	},
	titleName: {
		fontSize: 22,
		color: '#777777',
		fontWeight: 'bold'
	},
	titleInfo: {
		color: '#777777',
		fontSize: 16
	}
});

export default Settings;
