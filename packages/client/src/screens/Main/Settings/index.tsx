import React from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationScreenProps } from 'react-navigation';
import { Text } from '@move/components';
import Row from './components/Row';

const Settings = ({ navigation }: NavigationScreenProps) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View
				style={{
					marginVertical: 20,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingHorizontal: 20
				}}
			>
				<Text
					bold
					style={{
						fontSize: 40,
						color: '#7B96A5'
					}}
				>
					Settings
				</Text>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Feather name='x' size={30} color='#7B96A5' />
				</TouchableOpacity>
			</View>
			<View>
				<Row label='Manage Credit Card' />
				<Row label='Manage Credit Card' />
				<Row label='Manage Credit Card' />
			</View>
		</SafeAreaView>
	);
};

export default Settings;
