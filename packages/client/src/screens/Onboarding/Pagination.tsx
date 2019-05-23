import React from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface PaginationProps {
	tabs: any[];
	scrollX: Animated.Value;
}

const Pagination = ({ tabs, scrollX }: PaginationProps) => {
	const position = Animated.divide(scrollX, width);

	return (
		<View style={styles.container}>
			{tabs.map((_, index) => {
				const backgroundColor = position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: ['#D3D3D3', '#56C4E7', '#D3D3D3'],
					extrapolate: 'clamp'
				});
				const scale = position.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [0.8, 1, 0.8]
				});
				return (
					<Animated.View
						key={index}
						style={[styles.dot, { backgroundColor, transform: [{ scale }] }]}
					/>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: width / 5,
		marginBottom: 20,
		position: 'absolute',
		alignSelf: 'center',
		bottom: height / 5
	},
	dot: {
		height: 14,
		width: 14,
		borderRadius: 10
	}
});

export default Pagination;
