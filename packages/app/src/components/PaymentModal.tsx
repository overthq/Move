import React from 'react';
import Modalize from 'react-native-modalize';

interface PaymentModalProps {
	modalRef: React.ReactRefObject<Modalize>;
}

const PaymentModal = ({ modalRef }: PaymentModalProps) => (
	<Modalize ref={modalRef}></Modalize>
);

export default PaymentModal;
