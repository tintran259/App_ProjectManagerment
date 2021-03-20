import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import DrawerBody from './DrawerBody';
import DrawerFooter from './DrawerFooter';
import DrawerHeader from './DrawerHeader';
import stylesDrawer from '../../../assets/styles/Drawer';

export default function index({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <DrawerHeader />
        <DrawerBody navigation={navigation} />
        <DrawerFooter />
      </View>
    </SafeAreaView>
  );
}
