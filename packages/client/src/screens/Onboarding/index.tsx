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
import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';
import { AppState } from '@move/core';

import Slide from './Slide';
import Pagination from './Pagination';
import slides from './slides';

const { width } = Dimensions.get('window');

interface OnboardingProps extends NavigationScreenProps {
	accessToken: string;
}

const Onboarding = (props: OnboardingProps) => {
	React.useEffect(() => {
		if (!!props.accessToken) {
			props.navigation.navigate('Main');
		}
	}, []);

	const scrollX = new Animated.Value(0);

	const skip = () => {
		props.navigation.navigate('Auth');
	};
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
				onScroll={Animated.event([
					{
						nativeEvent: {
							contentOffset: { x: scrollX }
						}
					}
				])}
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

const mapStateToProps = ({ auth }: AppState) => ({
	accessToken: auth.accessToken
});

export default connect(mapStateToProps)(Onboarding);
