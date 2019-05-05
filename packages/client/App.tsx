import React from 'react';
import AppNavigator from './src/screens';
import { useScreens } from 'react-native-screens';

useScreens();

const App = (): JSX.Element => <AppNavigator />;

export default App;
