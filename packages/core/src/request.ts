// TODO: Add enviroment variables
// Auto-switch between dev, staging and prod.

const API_URL = 'http://localhost:4000';

export const post = async (endpoint: string, body: object) => {
	const response = await fetch(`${API_URL}/${endpoint}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
	const data = await response.json();
	return data;
};

export const get = async (endpoint: string) => {
	const response = await fetch(`${API_URL}/${endpoint}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	const data = await response.json();
	return data;
};
