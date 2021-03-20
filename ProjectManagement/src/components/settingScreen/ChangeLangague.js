import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import RadioForm from 'react-native-simple-radio-button';

// Styles + Icon
import {StylesSetting} from '../../assets/styles';

// Action + Business
import {
  ToEnglishBusiness,
  ToVietnameseBusiness,
} from '../../business/settingBusiness/ChangeLanguageBusiness';
import {LogoutBusiness} from '../../business/AuthenticateBusiness';
import {DATA_STATUS} from '../../utils/configs';
import {logout} from '../../redux/action/LoginAction';
import I18n from '../../utils/I18n';

import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ChangeLangague({url}) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.LoginReducer.userInfo);

  const [language, setLanguage] = useState(userInfo.userContext.lang);
  const [languageOnApp, setLanguageOnApp] = useState('');

  const onAsyncLanguage = () => {
    if (language === 'vi_VN') {
      onAppVietnamese();
    } else {
      onAppEnglish();
    }
  };

  useEffect(() => {
    onAsyncLanguage();
  }, [language]);

  /* Radio btn */
  const radio_props = [
    {
      label: 'English',
      value: 'en_US',
    },
    {label: 'Vietnamese', value: 'vi_VN'},
  ];

  const handlLogout = async () => {
    // xu ly api logout
    return await LogoutBusiness().then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        dispatch(logout());
      }
    });
  };

  const onAppEnglish = () => {
    I18n.locale = 'en-Us';
    setLanguageOnApp('English');
  };

  const onAppVietnamese = () => {
    I18n.locale = 'vi-VN';
    setLanguageOnApp('Vietnamese');
  };

  /* Change language to English */
  const onEnglish = async () => {
    return await ToEnglishBusiness(userInfo.uid, url).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        handlLogout();
        onAppEnglish();
      }
    });
  };

  /* Change language to Vietnamses */
  const onVietnamese = async () => {
    return await ToVietnameseBusiness(userInfo.uid, url).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        handlLogout();
        onAppVietnamese();
      }
    });
  };

  /* When user click radio btn => call fn onCheck */
  const onCheck = (value) => {
    if (value === 'en_US') {
      onEnglish();
    } else {
      onVietnamese();
    }
  };

  return (
    <View>
      <Text style={StylesSetting.itemTitle}>{I18n.t('change_language')}</Text>
      <RadioForm
        radio_props={radio_props}
        initial={language === 'vi_VN' ? 1 : 0}
        onPress={(value) => onCheck(value)}
        /*style */
        animation={true}
        buttonSize={10}
        labelStyle={{fontSize: 13}}
        style={StylesSetting.radioBtn}
      />
    </View>
  );
}
