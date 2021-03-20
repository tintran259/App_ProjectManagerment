import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {DATA_STATUS, GOOGLE_CONFIGS} from '../utils/configs';

const LoginGoogleService = () => {
  return new Promise(async (resolve, reject) => {
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
    try {
      await GoogleSignin.hasPlayServices();
      let accountInfo = await GoogleSignin.signIn();
      resolve({
        status: DATA_STATUS.SUCCESS,
        data: accountInfo,
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        reject({
          status: DATA_STATUS.FAILED,
          error: 'Play services not available or outdated',
        });
      } else {
        reject({
          status: DATA_STATUS.FAILED,
          error: 'Error when login Google',
        });
      }
    }
  });
};

export {LoginGoogleService};
