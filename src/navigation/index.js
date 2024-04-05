import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Splash from '../components/splash';
import Contacts from '../pages/contacts';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Contact" component={Contacts} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
