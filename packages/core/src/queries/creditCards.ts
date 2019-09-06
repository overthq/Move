export const SAVE_CARD = `
	mutation SaveCard(
		$userId: ID!
		$cardNumber: String!
		$cvv: String!
		$expiryMonth: String!
		$expiryYear: String!
	) {
		saveCard(input: {
			userId: $userId
			cardNumber: $cardNumber
			cvv: $cvv
			expiryMonth: $expiryMonth
			expiryYear: $expiryYear
		}) {
			_id
			userId
			cardDigits
			cardBIN
			expiryMonth
			expiryYear
			cardType
			token
		}
	}
`;

export const CREDIT_CARDS = `
	query CreditCards($userId: ID!) {
		creditCards(userId: $userId) {
			_id
			userId
			cardDigits
			cardBIN
			expiryMonth
			expiryYear
			cardType
			token	
		}
	}
`;
