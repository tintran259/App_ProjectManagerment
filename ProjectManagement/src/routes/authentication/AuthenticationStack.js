import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../screens/authentication/Login';
import ChangePasswordScreen from '../../screens/authentication/ChangePassword';

const Stack = createStackNavigator();

export default AuthenticationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  );
};
