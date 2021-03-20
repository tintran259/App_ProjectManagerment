import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardStack from '../dashboard/DashBoardStack';
import StackTaskScreens from '../stack/Stack_Task_Screen';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StackTaskScreens" component={StackTaskScreens} />
    </Tab.Navigator>
  );
}
