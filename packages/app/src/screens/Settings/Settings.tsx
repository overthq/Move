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
		<Feather name='arrow-right' />
	</TouchableOpacity>
);

const Settings = ({ navigation }: NavigationScreenProps) => (
	<View style={{ flex: 1 }}>
		<FlatList
			data={settingScreens}
			keyExtractor={page => page.routeName}
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
		paddingVertical: 2,
		paddingHorizontal: 5,
		borderColor: '#D3D3D3',
		borderTopWidth: 1,
		borderBottomWidth: 1
	},
	itemName: {
		fontSize: 16
	}
});

export default Settings;
