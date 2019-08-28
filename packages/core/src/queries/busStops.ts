export const BUS_STOPS = `
	query BusStops {
		busStops {
			_id
			name
		}
	}
`;

export const BUS_STOP = `
	query BusStop($id: ID!) {
		busStop(id: $id) {
			_id
			name
		}
	}
`;

export const CREATE_BUS_STOP = `
	mutation CreateBusStop($name: String!) {
		createBusStop(input: { name: $name }) {
			_id
			name
		}
	}
`;
