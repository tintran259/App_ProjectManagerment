import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

//Redux Store
import { Provider } from 'react-redux';
import Store from './redux/Store';

//Root Router
import RootNavigation from './routes/root/RootNavigation';

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
