/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import {Provider} from 'react-redux';
import MainContainer from './src/MainContainer';
import { store } from './src/redux/store/Store';

import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = () => {
  return (
    <Provider store={store}>
       <SafeAreaProvider>
      <MainContainer />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;