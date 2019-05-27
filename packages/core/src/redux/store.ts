import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/reducer';

const appReducer = combineReducers({
	auth: persistReducer({ key: 'auth', storage }, authReducer)
});

export type AppState = ReturnType<typeof appReducer>;

const middlewares = applyMiddleware(thunk, logger);
const rootReducer = (state: AppState | undefined, action: any) => {
	if (action.type === 'AUTH_LOGOUT' && !!state) {
		Object.keys(state).forEach(key => {
			storage.removeItem(`persist:${key}`);
		});
		state = undefined;
	}
	return appReducer(state, action);
};

export const store = createStore(rootReducer, middlewares);
export const persistor = persistStore(store);
