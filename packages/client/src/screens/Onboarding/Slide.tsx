import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface SlideProps {
	title: string;
	description: string;
}

const Slide = ({ title, description }: SlideProps) => (
	<View style={styles.container}>
		<View style={[styles.half, { backgroundColor: '#A7E3F6' }]} />
		<View style={styles.half}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		width,
		flex: 1
	},
	title: {
		fontSize: 30,
		color: '#56C4E7',
		marginBottom: 20,
		textAlign: 'center',
		fontFamily: 'Rubik-Bold'
	},
	description: {
		fontSize: 18,
		color: '#505050',
		textAlign: 'center',
		fontFamily: 'Rubik-Regular',
		marginBottom: height / 5
	},
	half: {
		flexGrow: 1,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		paddingHorizontal: 20
	}
});

export default Slide;
