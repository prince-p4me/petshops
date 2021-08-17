// In App.js in a new project

import * as React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from "./src/navigation/stack";
import { navigationRef, navigate, isReadyRef } from "./src/navigation/navigation";

import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  LogBox.ignoreAllLogs(true);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;