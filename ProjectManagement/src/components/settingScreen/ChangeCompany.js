import React, {useState} from 'react';
import {Text, View} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import {useSelector} from 'react-redux';
import {StylesSetting} from '../../assets/styles';
import {
  KeyTechBusiness,
  XbossBusiness,
} from '../../business/settingBusiness/ChangeCompanyBusiness';
import {DATA_STATUS} from '../../utils/configs';
import {logout} from '../../redux/action/LoginAction';
import {LogoutBusiness} from '../../business/AuthenticateBusiness';
import {useDispatch} from 'react-redux';
import I18n from '../../utils/I18n';

export default function ChangeCompany({url}) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.LoginReducer.userInfo);
  const company = userInfo.companyId;
  const allowedCompanies = userInfo.allowedCompanies;

  let allowedCompaniesArr = allowedCompanies.map((item) => {
    return {label: item[1], value: item[0].toString()};
  });

  console.log('allowedComp a niesArr =>', allowedCompaniesArr);

  // const radio_props = [
  //   {label: 'KeyTech - Công ty cổ phẩn KeyTech', value: '2'},
  //   {label: 'Xboss - Công ty TNHH giải pháp công nghệ', value: '3'},
  // ];

  const handlLogout = async () => {
    // xu ly api logout
    return await LogoutBusiness().then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        dispatch(logout());
      }
    });
  };

  const onXboss = async () => {
    return await XbossBusiness(userInfo.uid, url).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        handlLogout();
      }
    });
  };

  const onKeyTech = async () => {
    return await KeyTechBusiness(userInfo.uid, url).then((res) => {
      if (res.status === DATA_STATUS.SUCCESS) {
        handlLogout();
      }
    });
  };

  /* When user click radio btn => call fn onCheck */
  const onCheck = (value) => {
    if (value === '3') {
      onXboss();
    } else {
      onKeyTech();
    }
  };

  return (
    <View>
      <Text style={StylesSetting.itemTitle}>{I18n.t('change_company')}</Text>

      {/* <TouchableOpacity onPress={onXboss}>
        <Text>Xboss</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onKeyTech}>
        <Text>KeyTech</Text>
      </TouchableOpacity> */}

      <RadioForm
        radio_props={allowedCompaniesArr}
        initial={company === 2 ? 0 : 1}
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
