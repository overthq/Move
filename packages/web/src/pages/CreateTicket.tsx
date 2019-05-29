import React from 'react';
import Ticket from '../components/Ticket';

const initialState = {
	zone: '',
	expiryDate: new Date()
};

const CreateTicket = () => {
	const [state, setState] = React.useReducer(
		(prev, next) => ({ ...prev, ...next }),
		initialState
	);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		return setState({ [event.target.name]: [event.target.value] });
	};

	return (
		<div>
			<input name='zone' placeholder='Zone' onChange={handleChange} />
			<Ticket zone={state.zone} />
		</div>
	);
};

export default CreateTicket;
