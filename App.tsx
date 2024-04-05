import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import stores from './src/services/stores';

const App = () => {
  return (
    <Provider store={stores}>
      <NavigationContainer>
        <AppNavigation />
        <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
