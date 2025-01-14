// localize.js
import { I18n } from 'i18n-js';
import * as RNLocalize from "react-native-localize";
import { MMKV } from 'react-native-mmkv';

import en from './translations/en';
import ar from './translations/ar';
import { storage } from '~/lib/storage';

const translations = { en, ar };

const i18n = new I18n(translations);

// Initialize MMKV

// Function to set the locale
export const setLocale = (languageCode: string) => {
  storage.set('userLanguage', languageCode);
  i18n.locale = languageCode;
};

// Function to get the saved locale or device locale
export const getLocale = () => {
  const userLanguage = storage.getString('userLanguage');
  return userLanguage || RNLocalize.getLocales()[0].languageCode;
};

// Initialize locale
i18n.locale = getLocale();

i18n.enableFallback = true;
i18n.defaultLocale = 'en';

export default i18n;