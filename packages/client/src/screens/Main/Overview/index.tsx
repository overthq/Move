import React from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationScreenProps } from 'react-navigation';
import { Text, Ticket, COLORS } from '@move/components';
import FAB from './FAB';
import mocks from './mocks.json';

const { height, width } = Dimensions.get('window');

const Overview = ({ navigation }: NavigationScreenProps) => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[COLORS.blue.primary, COLORS.blue.secondary]}
				style={styles.topHalf}
			>
				<View style={styles.metaContainer}>
					<Text bold style={styles.name}>
						Tickets
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
						<Feather name='settings' color='#FFFFFF' size={30} />
					</TouchableOpacity>
				</View>
				<View style={{ height: '50%' }}>
					<FlatList
						contentContainerStyle={{ display: 'flex', alignItems: 'center' }}
						style={{ width: '100%' }}
						data={mocks.tickets}
						keyExtractor={ticket => ticket.id}
						renderItem={({ item, index }) => (
							<Ticket key={index} zone={item.zone} />
						)}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			</LinearGradient>
			<FAB onPress={() => navigation.navigate('Purchase')} />
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
		width
	},
	metaContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '30%',
		paddingHorizontal: 20,
		paddingVertical: 20
	},
	name: {
		color: '#FFFFFF',
		fontSize: 30,
		letterSpacing: 1
	}
});

export default Overview;
