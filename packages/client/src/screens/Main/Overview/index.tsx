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
import { AppState } from '@move/core';
import mocks from './mocks.json';
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');

interface OverviewProps extends NavigationScreenProps {
	firstName: string | null;
	lastName: string | null;
}

const Overview = ({ navigation, firstName, lastName }: OverviewProps) => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[COLORS.blue.primary, COLORS.blue.secondary]}
				style={styles.topHalf}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						height: '30%',
						paddingHorizontal: 20,
						paddingVertical: 20
					}}
				>
					<Text
						style={{
							color: '#F2F2F2',
							fontSize: 20,
							fontFamily: 'Rubik-Medium',
							letterSpacing: 1
						}}
					>
						{`${firstName} ${lastName}`}
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
		width
	}
});

const mapStateToProps = ({ auth }: AppState) => ({
	firstName: auth.user && auth.user.firstName,
	lastName: auth.user && auth.user.lastName
});

export default connect(mapStateToProps)(Overview);
