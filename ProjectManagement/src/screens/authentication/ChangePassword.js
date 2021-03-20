import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {IconGlobe, IconUser, IconChevronLeft} from '../../assets/icons/index';
import {StylesLogin} from '../../assets/styles';
import I18n from '../../utils/I18n';

export default function ChangePassword({navigation}) {
  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={StylesLogin.test}>
      <View style={StylesLogin.formInput}>
        <View style={StylesLogin.forwardPosition}>
          <TouchableOpacity onPress={onGoBack} style={StylesLogin.forwardBtn}>
            <IconChevronLeft style={StylesLogin.forwardIcon} />
            <Text style={StylesLogin.forwardText}>{I18n.t('back')}</Text>
          </TouchableOpacity>
        </View>
        {/* Input Form */}
        <Text style={StylesLogin.title}>{I18n.t('reset_pass')}</Text>

        <View style={StylesLogin.formInput_elm}>
          {/* URL input box */}
          <View style={StylesLogin.inputBox}>
            <IconGlobe style={StylesLogin.icon} />
            <TextInput style={StylesLogin.input} placeholder="URL" />
          </View>

          {/* Email/Username input box */}
          <View style={StylesLogin.inputBox}>
            <IconUser style={StylesLogin.icon} />
            <TextInput
              style={StylesLogin.input}
              placeholder={I18n.t('username')}
            />
          </View>
        </View>

        {/* Reset Button */}
        <TouchableOpacity style={StylesLogin.btn_Login}>
          <Text style={StylesLogin.text_btn}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
