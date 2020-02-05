import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { UserContext } from '../contexts/UserContext';
import SettingsOptions from './SettingsOptions';

interface SettingsModalProps {
	modalRef: React.RefObject<Modalize>;
	addCardModalRef?: React.RefObject<Modalize>;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
	modalRef,
	addCardModalRef
}) => {
	const { user, logOut } = React.useContext(UserContext);

	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			<View style={{ padding: 20 }}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleName}>
						{user.firstName} {user.lastName}
					</Text>
					<Text style={styles.titleInfo}>{user.phoneNumber}</Text>
				</View>
				<SettingsOptions
					options={[
						{
							name: 'Card',
							action: () => {
								// Bear in mind, THIS IS A HACK!!!
								// In the future, this component will transition into children views with a fade animation.
								// This will also have to include animations and transitions.
								addCardModalRef.current?.open();
								modalRef.current?.close();
							}
						}
					]}
				/>
				<TouchableOpacity style={styles.actionButton} onPress={logOut}>
					<Text style={styles.actionButtonText}>Log Out</Text>
				</TouchableOpacity>
			</View>
		</Modalize>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#E8E8E8'
	},
	titleContainer: {
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 10
	},
	titleName: {
		fontSize: 20,
		color: '#161616',
		fontWeight: '500'
	},
	titleInfo: {
		color: '#505050',
		fontSize: 16
	},
	actionButton: {
		width: '100%',
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C92614',
		marginTop: 10,
		padding: 10
	},
	actionButtonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
});

export default SettingsModal;
