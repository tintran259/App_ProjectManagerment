import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {withNavigation} from '@react-navigation/compat';

//Styles + Icon
import {IconCog, IconQuestion, IconSignOut} from '../../../assets/icons';
import stylesDrawer from '../../../assets/styles/Drawer';

//Action + Business + NameSpace
import {logout} from '../../../redux/action/LoginAction';
import {LogoutBusiness} from '../../../business/AuthenticateBusiness';
import {DATA_STATUS} from '../../../utils/configs';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import I18n from '../../../utils/I18n';

function DrawerFooter({navigation}) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.LoginReducer.userInfo);

  const handlLogout = async () => {
    // xu ly api logout
    // return await LogoutBusiness().then((res) => {
    //   if (res.status === DATA_STATUS.SUCCESS) {
    //     dispatch(logout());
    //   }
    // });

    if (userInfo.email) {
      signOut();
    } else {
      return await LogoutBusiness().then((res) => {
        if (res.status === DATA_STATUS.SUCCESS) {
          dispatch(logout());
        }
      });
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      dispatch(logout()); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  const onSetting = () => {
    navigation.navigate('SettingScreen');
  };

  return (
    <View style={stylesDrawer.footer}>
      <View style={stylesDrawer.contentFooter}>
        <TouchableOpacity onPress={onSetting}>
          <View style={stylesDrawer.itemFooter}>
            <IconCog style={stylesDrawer.iconFooter} />
            <Text style={stylesDrawer.textFooter}>{I18n.t('setting')}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={stylesDrawer.itemFooter}>
            <IconQuestion style={stylesDrawer.iconFooter} />
            <Text style={stylesDrawer.textFooter}>{I18n.t('helpdesk')}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlLogout}>
          <View style={stylesDrawer.itemFooter}>
            <IconSignOut style={stylesDrawer.iconLogout} />
            <Text style={stylesDrawer.textLogout}>{I18n.t('logout')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default withNavigation(DrawerFooter);
