import I18n, { getLanguages } from 'react-native-i18n';

import en from '../assets/locales/en.json';
import vi from '../assets/locales/vi.json';

I18n.fallbacks = true;

I18n.translations = {
  en,
  vi,
};

getLanguages()
  .then((languages) => {
    console.log('getLanguages =>', languages);
  })
  .catch((error) => {
    console.log('getLang error =>', error);
  });

export default I18n;
