export const ROUTE = `
	query Route($id: ID!) {
		route(id: $id) {
			_id
			origin {
				_id
				name
			}
			destination {
				_id
				name
			}
			fare
		}
	}
`;
