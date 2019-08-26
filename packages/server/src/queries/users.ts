import { User } from '../models';

const userQueries = {
	users: async () => {
		const allUsers = await User.find();
		return allUsers;
	}
};

export default userQueries;
