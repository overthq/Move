import React from 'react';
import { StyleSheet } from 'react-native';
// import Animated from 'react-native-reanimated';
import MapboxGL from '@react-native-mapbox-gl/maps';

const handleLongPress = () => {
	// Animate map size to fullscreen with spring Animation
	// Animated.spring()
};

const NearbyStopsMap = () => {
	// Gets the nearest bus stops around and shows them on the map
	return (
		<MapboxGL.MapView
			showUserLocation
			styleURL={MapboxGL.StyleURL.Light} // This will eventually depend on the themethat is enabled, but light by default.
			logoEnabled={false}
			style={styles.mapView}
			onLongPress={handleLongPress}
		>
			{}
		</MapboxGL.MapView>
	);
};

const styles = StyleSheet.create({
	mapView: {
		borderRadius: 8
		// Shadow setup and some things
	}
});

export default NearbyStopsMap;
