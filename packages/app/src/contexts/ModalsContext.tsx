import React from 'react';
import { Modalize } from 'react-native-modalize';
import SuccessModal from '../components/SuccessModal';
import SettingsModal from '../components/SettingsModal';
import AndroidFingerprintModal from '../components/AndroidFingerprintModal';
import AddCardModal from '../components/AddCardModal';

type Modals = Record<
	'Success' | 'Settings' | 'Android Fingerprint' | 'Add Card',
	React.RefObject<Modalize>
>;

interface ModalsContextValue {
	openModal(modalName: keyof Modals): void;
	closeModal(modalName: keyof Modals): void;
}

export const ModalsContext = React.createContext<ModalsContextValue>({
	openModal: () => {
		/* noop */
	},
	closeModal: () => {
		/* noop */
	}
});

export const ModalsProvider: React.FC = ({ children }) => {
	// Should we let two modals be active at the same time?
	// Also, if one modal is open, should we animate the transition between the two modals.
	// This would take a lot of the job of Settings > Add Card away from me.
	const successModalRef = React.useRef<Modalize>(null);
	const settingsModalRef = React.useRef<Modalize>(null);
	const androidFingerprintModalRef = React.useRef<Modalize>(null);
	const addCardModalRef = React.useRef<Modalize>(null);

	const modals: Modals = {
		Success: successModalRef,
		Settings: settingsModalRef,
		'Android Fingerprint': androidFingerprintModalRef,
		'Add Card': addCardModalRef
	};

	const openModal = (modalName: keyof Modals) =>
		modals[modalName]?.current?.open();

	const closeModal = (modalName: keyof Modals) =>
		modals[modalName]?.current?.close();

	return (
		<ModalsContext.Provider value={{ openModal, closeModal }}>
			{children}
			<SuccessModal modalRef={successModalRef} />
			<SettingsModal
				modalRef={settingsModalRef}
				addCardModalRef={addCardModalRef}
			/>
			<AndroidFingerprintModal modalRef={androidFingerprintModalRef} />
			<AddCardModal modalRef={addCardModalRef} />
		</ModalsContext.Provider>
	);
};
