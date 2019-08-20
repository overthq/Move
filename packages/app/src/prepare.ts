import * as Permissions from 'expo-permissions';

export default async () => {
	const { status } = await Permissions.askAsync(Permissions.CAMERA);
};
