import React from 'react';
import { useMutation } from 'urql';
import { CREATE_BUS_STOP } from '@move/core';

const AddStop = () => {
	const [name, setName] = React.useState('');
	const [{ fetching, data, error }, executeMutation] = useMutation(
		CREATE_BUS_STOP
	);

	const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleSubmit = () => {
		executeMutation({ name });
		console.log(fetching, data, error);
	};

	return (
		<div>
			<input value={name} onChange={handleTextChange} />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
};

export default AddStop;