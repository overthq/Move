import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface SettingsItemProps {
	name: string;
	onPress?: () => void;
	borderBottom?: boolean;
}

export const SettingsItem = ({
	name,
	onPress,
	borderBottom
}: SettingsItemProps) => (
	<TouchableOpacity
		activeOpacity={0.7}
		style={[
			styles.itemContainer,
			borderBottom ? { borderBottomWidth: 0.5 } : {}
		]}
		{...{ onPress }}
	>
		<Text style={styles.itemName}>{name}</Text>
		<Feather name='chevron-right' size={18} color='#545454' />
	</TouchableOpacity>
);

interface SettingsItemToggleProps {
	name: string;
	value: boolean;
	toggle(): void;
	borderBottom?: boolean;
}

export const SettingsItemToggle = ({
	name,
	value,
	toggle,
	borderBottom
}: SettingsItemToggleProps) => (
	<View
		style={[
			styles.itemContainer,
			borderBottom ? { borderBottomWidth: 0.5 } : {}
		]}
	>
		<Text style={styles.itemName}>{name}</Text>
		<Switch
			value={value}
			onValueChange={toggle}
			trackColor={{ true: '#505050', false: '#F2F2F7' }}
			thumbColor='#FFFFFF'
		/>
	</View>
);

const styles = StyleSheet.create({
	itemContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#FFFFFF',
		borderColor: '#D3D3D3'
	},
	itemName: {
		fontSize: 16,
		fontWeight: '500',
		color: '#161616'
	}
});
