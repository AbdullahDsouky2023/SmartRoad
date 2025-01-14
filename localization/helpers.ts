import * as RNLocalize from "react-native-localize";
import i18n, { setLocale, getLocale } from "./localize";
import { I18nManager } from "react-native";
import { router, useRootNavigationState } from "expo-router";
import RNRESTART from 'react-native-restart'
import { storage } from "~/lib/storage";
// This function will be called from your components
export function changeLanguage() {
  const currentLanguage =   i18n.locale
    const newLanguage = currentLanguage === 'ar' ? "en"  : "ar" ;
  setLocale(newLanguage);
     
    I18nManager.forceRTL(newLanguage === 'ar');
    
    I18nManager.allowRTL(newLanguage === 'ar');
    RNRESTART.restart()
 
 
  return newLanguage;
}

// This function can be used to initialize the language when your app starts
export function initializeLanguage() {
  const currentLocale = getLocale();
  i18n.locale = currentLocale;
  const isRTL =I18nManager.isRTL //false
  
  const hasSetRTL = storage.getString('hasSetRTL');

  if (!hasSetRTL || hasSetRTL !== currentLocale) {
   
    I18nManager.forceRTL(isRTL);
    
    I18nManager.allowRTL(isRTL);

    storage.set('hasSetRTL', currentLocale);

  }

  return currentLocale;
}
