import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import TaskScreen from '../../screens/modules/task/TaskScreen';
import TaskDetailsScreen from '../../screens/modules/task/TaskDetailScreen';
import CreateTaskScreen from '../../screens/modules/task/CreateTaskScreen';

const Stack = createStackNavigator();

export default function StackTaskScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TaskScreen" component={TaskScreen} />
      <Stack.Screen name="TaskDetailScreen" component={TaskDetailsScreen} />
      <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen} />
    </Stack.Navigator>
  );
}
