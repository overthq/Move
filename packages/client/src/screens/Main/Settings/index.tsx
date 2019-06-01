import React from 'react';
import {
	SafeAreaView,
	View,
	TouchableOpacity,
	StyleSheet,
	Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationScreenProps } from 'react-navigation';
import { Text } from '@move/components';
import Row from './components/Row';
import { AppState } from '@move/core';

const { width } = Dimensions.get('window');

interface SettingsProps extends NavigationScreenProps {
	firstName: string | null;
	lastName: string | null;
	phoneNumber: string | null;
}

const Settings = ({
	navigation,
	firstName,
	lastName,
	phoneNumber
}: SettingsProps) => {
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
				<View style={styles.profileCard}>
					<Text
						bold
						style={{ color: '#505050', fontSize: 20 }}
					>{`${firstName} ${lastName}`}</Text>
					<Text style={{ color: '#777777', fontSize: 14 }}>
						{`${phoneNumber}`}
					</Text>
				</View>
				<Row label='Edit Account' />
				<Row label='Manage Credit Card' />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	profileCard: {
		alignSelf: 'center',
		width,
		paddingHorizontal: 20,
		paddingVertical: 5
	}
});

const mapStateToProps = ({ auth }: AppState) => ({
	firstName: auth.user && auth.user.firstName,
	lastName: auth.user && auth.user.lastName,
	phoneNumber: auth.user && auth.user.phoneNumber
});

export default connect(mapStateToProps)(Settings);
