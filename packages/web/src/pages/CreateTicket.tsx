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
			<div>
				<p>Your ticket will look like this:</p>
				<Ticket zone={state.zone} />
			</div>
		</div>
	);
};

export default CreateTicket;
