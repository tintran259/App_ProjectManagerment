import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Components
import DrawerContent from './drawerContent';
import StackProjectScreens from '../stack/Stack_Projects_Screens';
import StackTaskScreens from '../stack/Stack_Task_Screen';
import SettingScreen from '../../screens/settings';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContent {...props} navigation={navigation} />
      )}
      drawerStyle={{ width: 200 }}>
      <Drawer.Screen name="StackTaskScreens" component={StackTaskScreens} />
      <Drawer.Screen
        name="StackProjectsScreens"
        component={StackProjectScreens}
      />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
