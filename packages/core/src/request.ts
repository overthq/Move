// TODO: Add main endpoint url

export const post = async (endpoint: string, body: object) => {
	const response = await fetch(endpoint, {
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
	const response = await fetch(endpoint, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	const data = await response.json();
	return data;
};
