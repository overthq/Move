import Constants from 'expo-constants';

const ENV = {
	dev: {
		apiUrl: `http://${Constants.manifest.debuggerHost
			.split(`:`)
			.shift()
			.concat(':4000/')}`
	},
	staging: {
		apiUrl: 'https://moveappstaging.herokuapp.com/'
	},
	prod: {
		apiUrl: 'https://moveappstaging.herokuapp.com/'
	}
};

const getEnvVars = (env = '') => (env ? ENV[env] || ENV.staging : ENV.dev);

export default getEnvVars(Constants.manifest.releaseChannel);
