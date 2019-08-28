export const ROUTE = `
	query Route($id: ID!) {
		route(id: $id) {
			_id
			origin
			destination
			fare
		}
	}
`;
