import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';

// Styles + Icon
import {
  IconGlobe,
  IconUnlock,
  IconUser,
  IconEye,
  IconEyeSlash,
} from '../../assets/icons/index';
import {StylesLogin} from '../../assets/styles';

// Business + NameSpaces + action
import {
  LoginBusiness,
  LoginGoogleBusiness,
} from '../../business/AuthenticateBusiness';
import ModalLogin from '../../components/loginScreen/ModalLogin';
import {login} from '../../redux/action/LoginAction';
import {DATA_STATUS, DATA_STORAGE, GOOGLE_CONFIGS} from '../../utils/configs';

import AsyncStorage from '@react-native-community/async-storage';
import {getUrl} from '../../redux/action/Globalaction';
import DeviceInfo from 'react-native-device-info';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import I18n from '../../utils/I18n';

export default function Login({navigation}) {
  const [formLogin, setFormLogin] = useState({
    url: '',
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [checkUrl, setCheckUrl] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowModal = () => {
    setVisible(true);
  };

  // validate Login
  const validURL = () => {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    );
    let isValid = pattern.test(formLogin.url);
    if (!isValid) {
      alert(`"${formLogin.url}" is not URL`);
      //setCheckUrl(false)
      return false;
    } else {
      //setCheckUrl(true);
      return true;
    }
  };

  // End Validate

  const handleLogin = async () => {
    const {url, username, password} = formLogin;
    await LoginBusiness(url, username, password).then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const userInfo = response.data;
        dispatch(login(userInfo));
      } else {
        alert('fail');
      }
    });
  };

  const onResetPassword = () => {
    navigation.navigate('ChangePasswordScreen');
  };

  /* Bind data in MODAL to Input */
  const onInput = (item) => {
    setFormLogin({
      url: item.url,
      username: item.username,
    });
  };

  const onClear = () => {
    setFormLogin({
      url: '',
      username: '',
    });
  };

  /* ASYNC-STORAGE */
  var user = {
    username: formLogin.username,
    url: formLogin.url,
  };

  const save = async () => {
    try {
      await AsyncStorage.setItem(DATA_STORAGE.USER, JSON.stringify(user));
    } catch (error) {
      alert(error);
    }
  };

  const load = async () => {
    try {
      var user = await AsyncStorage.getItem(DATA_STORAGE.USER);
      if (user !== null) {
        let parsed = JSON.parse(user);
        let url = parsed.url;
        //setUrl(url);
        dispatch(getUrl(url));
      }
    } catch (error) {
      alert(error);
    }
  };

  const onLogin = async () => {
    await validURL();
    if (!validURL()) {
      alert('Sai URL!');
    } else if (!formLogin.username || !formLogin.password) {
      alert('nhập username & passwork');
    } else {
      handleLogin();
      save();
    }
  };

  useEffect(() => {
    load();
    //GoogleSignin.configure({webClientId: GOOGLE_CONFIGS.WEB_CLIENT_ID});
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_CONFIGS.WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      //accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  const signIn = async () => {
    await LoginGoogleBusiness().then((response) => {
      if (response.status === DATA_STATUS.SUCCESS) {
        const userInfo = response.data;
        console.log('userInfo gg ===>', userInfo);
        dispatch(login(userInfo));
      } else {
        // caan bat falsehh
      }
    });
  };

  const SCREEN_WIDTH = Dimensions.get('screen').width;
  return (
    <View style={StylesLogin.formInput}>
      {/* Logo Image */}
      <View style={StylesLogin.headerLogin}>
        <Image
          style={{
            width: SCREEN_WIDTH - 60,
            height: 'auto',
            aspectRatio: 1667 / 512, //WIDTH/HEIGHT
          }}
          source={require('../../assets/images/logo.png')}
        />
      </View>

      {/* Input Form */}
      <View style={StylesLogin.formInput_elm}>
        {/* URL input box */}
        <View style={StylesLogin.inputBox}>
          <IconGlobe style={StylesLogin.icon} />
          <TextInput
            value={formLogin.url}
            onChangeText={(text) => {
              setFormLogin({...formLogin, url: text});
            }}
            style={StylesLogin.input}
            placeholder="URL"
            onBlur={validURL}
          />
        </View>

        {/* Email/Username input box */}
        <View style={StylesLogin.inputBox}>
          <TouchableOpacity onPress={handleShowModal}>
            <IconUser style={StylesLogin.icon} />
          </TouchableOpacity>

          <TextInput
            value={formLogin.username}
            onChangeText={(text) => {
              setFormLogin({...formLogin, username: text});
            }}
            style={StylesLogin.input}
            placeholder={I18n.t('username')}
          />
        </View>

        {/* Password input box */}
        <View style={StylesLogin.inputBox}>
          <IconUnlock style={StylesLogin.icon} />
          <TextInput
            value={formLogin.password}
            onChangeText={(text) => {
              setFormLogin({...formLogin, password: text});
            }}
            style={StylesLogin.input}
            placeholder={I18n.t('password')}
            secureTextEntry={showPassword ? false : true}
          />

          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            {showPassword ? (
              <IconEyeSlash style={StylesLogin.iconPassShow} />
            ) : (
              <IconEye style={StylesLogin.iconPass} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {/* Login Button */}
      <TouchableOpacity onPress={onLogin} style={StylesLogin.btn_Login}>
        <Text style={StylesLogin.text_btn}>{I18n.t('login')}</Text>
      </TouchableOpacity>
      {/* Login GG Button */}
      <TouchableOpacity onPress={signIn} style={StylesLogin.loginGoogle}>
        <Text style={StylesLogin.text_btn}>{I18n.t('login_google')}</Text>
      </TouchableOpacity>
      {/* Reset Password */}
      <View style={StylesLogin.text_change}>
        <Text>{I18n.t('forgot_pass')}</Text>
        <TouchableOpacity onPress={onResetPassword}>
          <Text style={StylesLogin.text_for}>{I18n.t('reset_pass')}</Text>
        </TouchableOpacity>
      </View>
      <View style={StylesLogin.text_change}>
        <Text>
          {I18n.t('version')}: {DeviceInfo.getVersion()}.
          {DeviceInfo.getBuildNumber()}
        </Text>
      </View>
      {/* Modal */}
      <ModalLogin
        visible={visible}
        setVisible={setVisible}
        onInput={onInput}
        onClear={onClear}
      />
    </View>
  );
}
