import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SettingScreen from '../../screens/settings';

const Stack = createStackNavigator();

export default function DashBoardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
}
