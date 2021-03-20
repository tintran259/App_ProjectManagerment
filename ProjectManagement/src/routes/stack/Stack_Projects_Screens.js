import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import ProjectScreens from '../../screens/modules/project/projectScreens';
import ProjectDetailsScreens from '../../screens/modules/project/projectDetailScreens';
const Stack = createStackNavigator();

export default function StackProductScreens() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="ProjectScreens" component={ProjectScreens} />
         <Stack.Screen
            name="ProjectDetailsScreens"
            component={ProjectDetailsScreens}
         />
      </Stack.Navigator>
   );
}
