import React from 'react';
import {Text, View, Image} from 'react-native';

// Styles + Icon
import {IconUser} from '../../../assets/icons';
import Style from '../../../assets/styles/Drawer';
import {useSelector} from 'react-redux';

export default function DrawerHeader() {
  const userInfo = useSelector((state) => state.LoginReducer.userInfo);

  const getAvatar = () => {
    return `https://uat.xboss.com/web/image?model=res.users&field=image&id=${userInfo.uid}`;
  };

  return (
    <View style={Style.header}>
      <View style={Style.contentHeader}>
        {/* <Image style={Style.avatar} source={{uri: getAvatar()}} /> */}
        <Image
          style={Style.avatar}
          source={userInfo.email ? {uri: userInfo.photo} : {uri: getAvatar()}}
        />

        <Text style={Style.headerText}>{userInfo.name}</Text>
        {userInfo.email ? (
          <Text style={Style.headerTextEmail}>{userInfo.email}</Text>
        ) : (
          <Text style={Style.headerTextEmail}>{userInfo.currentCompany}</Text>
        )}
      </View>
    </View>
  );
}
