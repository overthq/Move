export const TRIP = `
	query Trip($id: ID!) {
		trip(id: $id) {
			_id
			origin
			destination
			fare
		}
	}
`;
