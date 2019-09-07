export const PURCHASE_TICKET = `
	mutation PurchaseTicket(
		$userId: $ID!
		$routeId: $ID!
		$quantity: Int
	) {
		purchaseTicket(input: {
			userId: $userId
			routeId: $routeId
			quantity: $quantity
		}) {
			_id
			userId
			route {
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
			quantity
		} 
	}
`;

export const TICKETS = `
	query Tickets($userId: ID!) {
		tickets(userId: $userId) {
			_id
			userId
			route {
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
			quantity
		}
	}
`;
