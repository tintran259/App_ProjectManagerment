import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Components
import SplashScreen from '../../screens/root/SplashSreen';

//Routes
import AuthenticationStack from '../authentication/AuthenticationStack';
import DrawerNavigation from '../drawer/DrawerNavigation';
import {ActivityIndicator, Text} from 'react-native';
//Utils
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();

export default function RootNavigation() {
  const userInfo = useSelector((state) => state.LoginReducer.userInfo);
  const isSplash = useSelector((state) => state.LoginReducer.isSplash);

  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSplash ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : userInfo.sessionId != '' ? (
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        ) : (
          <Stack.Screen name="Authentication" component={AuthenticationStack} />
        )}
      </Stack.Navigator>
      {isLoading ? (
        <ActivityIndicator
          animating={true}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: '#95a5a638',
          }}
          size={50}
          color="#5189ff"
        />
      ) : (
        <Text style={{display: 'none'}}></Text>
      )}
    </>
  );
}
