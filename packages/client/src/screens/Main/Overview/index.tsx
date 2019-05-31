import React from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	FlatList
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationScreenProps } from 'react-navigation';
import { Ticket, COLORS } from '@move/components';
import mocks from './mocks.json';
const { height, width } = Dimensions.get('window');

const Overview = ({ navigation }: NavigationScreenProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.topHalf}>
				<View style={{ flexDirection: 'row', height: '50%' }}>
					<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
						<Feather name='settings' />
					</TouchableOpacity>
				</View>
				<FlatList
					style={{ width: '100%', height: '50%' }}
					data={mocks.tickets}
					keyExtractor={ticket => ticket.id}
					renderItem={({ item, index }) => (
						<Ticket key={index} zone={item.zone} />
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>
			{/* Add a FAB button */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	topHalf: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: height / 2,
		width,
		backgroundColor: COLORS.blue.secondary
	}
});

export default Overview;
