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
		<Feather name='chevron-right' size={18} color='#777777' />
	</TouchableOpacity>
);

const UserDetails = () => <View></View>;

const Settings = ({ navigation }: NavigationScreenProps) => (
	<View style={{ flex: 1, backgroundColor: '#232323' }}>
		<FlatList
			data={settingScreens}
			keyExtractor={page => page.routeName}
			ListHeaderComponent={UserDetails}
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
		padding: 10,
		backgroundColor: '#191919',
		borderColor: '#777777',
		borderBottomWidth: 1
	},
	itemName: {
		fontSize: 14,
		fontWeight: '500',
		color: '#D3D3D3'
	}
});

export default Settings;
