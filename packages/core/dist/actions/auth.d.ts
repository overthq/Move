import { User } from '../types';
export declare const storeUserData: (user: User) => Promise<void>;
export declare const getUserData: () => Promise<User>;
