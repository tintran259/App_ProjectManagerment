import React from 'react';
import {Text, View} from 'react-native';
import {StylesSetting} from '../../assets/styles';
import ChangeCompany from '../../components/settingScreen/ChangeCompany';
import ChangeLangague from '../../components/settingScreen/ChangeLangague';
import DeviceInfo from 'react-native-device-info';
import I18n from '../../utils/I18n';
import {useSelector} from 'react-redux';

export default function index() {
  const url = useSelector((state) => state.GlobalReducer.url);

  return (
    <View style={StylesSetting.settingScreen}>
      <View style={StylesSetting.settingItem}>
        <ChangeLangague url={url} />
      </View>

      <View style={StylesSetting.settingItem}>
        <ChangeCompany url={url} />
      </View>

      <View style={StylesSetting.settingItem}>
        <View style={StylesSetting.version}>
          <Text style={{fontWeight: 'bold'}}>{I18n.t('version')}</Text>
          <Text>
            {DeviceInfo.getVersion()}.{DeviceInfo.getBuildNumber()}
          </Text>
        </View>
      </View>
    </View>
  );
}
