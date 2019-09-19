import React from 'react';
import { useCreateBusStopMutation } from '@move/core';

const AddStop = () => {
	const [name, setName] = React.useState('');
	const [, executeMutation] = useCreateBusStopMutation();

	const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleSubmit = () => executeMutation({ name });

	return (
		<div>
			<input value={name} onChange={handleTextChange} />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default AddStop;
