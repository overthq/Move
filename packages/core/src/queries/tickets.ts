export const PURCHASE_TICKET = `
	mutation PurchaseTicket(
		$userId: $ID!
		$routeId: $ID!
		$quantity: Int
	) {
		purchaseTicket(
			userId: $userId
			routeId: $routeId
			quantity: $quantity
		) {
			_id
			userId
			routeId
			quantity
		} 
	}
`;

export const TICKETS = `
	query Tickets($userId: ID!) {
		tickets(userId: $userId) {
			_id
			userId
			routeId
			quantity
		}
	}
`;
