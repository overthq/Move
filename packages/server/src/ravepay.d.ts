declare module 'ravepay' {
	export interface CardDetails {
		firstname?: string;
		lastname?: string;
		email?: string;
		phonenumber?: string;
		cvv: string;
		cardno: string;
		expirymonth: string;
		expiryyear: string;
		amount: string;
		currency: string;
		country: string;
		device_fingerprint: string;
	}

	export default class RavePay {
		public constructor(
			PUBLICK_KEY: string,
			SECRET_KEY: string,
			PRODUCTION_FLAG: string | boolean
		) {
			this.PUBLICK_KEY = PUBLICK_KEY;
			this.SECRET_KEY = SECRET_KEY;
			this.PRODUCTION_FLAG = PRODUCTION_FLAG;
		}

		public Card = { charge: (cardDetails: CardDetails) => any };
		public TokenCharge = { card: async (cardDetails: CardDetails) => any };
	}
}
