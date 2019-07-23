import React from 'react';
import {
	FlatList,
	Dimensions,
	Animated,
	SafeAreaView,
	TouchableOpacity,
	Text,
	View,
	StyleSheet
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import Slide from '../components/Slide';
import Pagination from '../components/Pagination';

const slides = [
	{
		title: 'Buy tickets easily',
		description: 'Buy bus and train tickets on the go'
	},
	{
		title: 'Subscriptions',
		description: 'Subscribe to daily, weekly or monthly recurring payments'
	},
	{
		title: 'Get transit updates',
		description:
			'Find out about rescheduled trips, ticket deals and trip reminders'
	}
];

const { width } = Dimensions.get('window');

const Onboarding = ({ navigation }: NavigationScreenProps) => {
	const scrollX = new Animated.Value(0);
	const handleScroll = Animated.event([
		{
			nativeEvent: {
				contentOffset: { x: scrollX }
			}
		}
	]);

	const skip = () => navigation.navigate('Auth');
	const goToNext = () => {};

	return (
		<>
			<FlatList
				data={slides}
				keyExtractor={item => item.title}
				horizontal
				showsHorizontalScrollIndicator={false}
				snapToInterval={width}
				snapToAlignment='center'
				decelerationRate={0}
				pagingEnabled
				onScroll={handleScroll}
				renderItem={({ item, index }) => <Slide {...item} key={index} />}
			/>
			<Pagination tabs={slides} {...{ scrollX }} />
			<SafeAreaView style={styles.bottomBarContainer}>
				<View style={styles.bottomBar}>
					<TouchableOpacity onPress={skip}>
						<Text style={[styles.bottomBarLink, { color: '#505050' }]}>
							Skip
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={goToNext}>
						<Text style={[styles.bottomBarLink, { color: '#56C4E7' }]}>
							{'Next >'}
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	bottomBarContainer: {
		width,
		bottom: 0,
		position: 'absolute'
	},
	bottomBar: {
		position: 'relative',
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 20,
		justifyContent: 'space-between'
	},
	bottomBarLink: {
		textTransform: 'uppercase',
		fontFamily: 'Rubik-Bold',
		fontSize: 16
	}
});

export default Onboarding;
