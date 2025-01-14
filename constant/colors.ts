/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { useColorScheme } from "nativewind";
import { Appearance, I18nManager, Platform } from "react-native";
import { PlatformColor } from "react-native";
import { getLocale } from "~/localization/localize";


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
  export const useRTLDirection =()=>{
    const Language = getLocale()
  const   direction= Language === 'ar' ? 'left' :'left'
 const  invertedFlatList =Platform.OS === 'android' && I18nManager.isRTL
  const FlatListdirectionClassName = `flex ${ I18nManager.isRTL ? 'flex-row-reverse' : 'flex-row'}`
    return {
      textAlign:direction,
      invertedFlatList,
      FlatListdirectionClassName
    }
  }
  
  // const theme =storage.getString(THEMESTORAGEKEY)
  const theme = Appearance.getColorScheme()
  console.log('the theme isisis colors',theme)
  // console.log('the theme2 isisis colors',theme2)
  export const lightColors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: 'blue',
    tint: tintColorDark,
    icon: 'blue',
    tabIconDefault: 'blue',
    tabIconSelected: tintColorDark,
  },
  primary: '#8E6B68' ,
  darkPrimary:'#6C3441',

  black:'#000000',
  white: '#ffffff',
  red:'#BA1735',
  green:'#1ACC72',
  grayIcon:'rgba(0,0,0,0.2)',
  Black100:  'rgba(0,0,0,1)' ,
  Black70: 'rgba(0,0,0,0.7)' ,
  Black40:  'rgba(0,0,0,0.4)',
  Black20:  'rgba(0,0,0,0.2)',
  Card:'#EFEFF4',
 
  Background:'#000000',
  // grayIcon:'#CFCFCF',
  Surface:'#ffffff',
  mainFont:'ElMessiriBold',
  FontStyleMain:{
    fontFamily:'BeVietnam'
  },
  BoldFontStyleMain:{
    fontFamily:'BoldBeVietnam'
  }



};
  export const DarkColors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: 'blue',
    tint: tintColorDark,
    icon: 'blue',
    tabIconDefault: 'blue',
    tabIconSelected: tintColorDark,
  },
  primary: '#8E6B68',
  darkPrimary:'#6C3441',

  black:'#000000',
  white:'#000000',
  red:'#BA1735',
  green:'#1ACC72',
  grayIcon:'rgba(0,0,0,0.2)',
  Black100: 'rgba(255,255,255,1)',
  Black70:'rgba(255,255,255,0.7)',
  Black40: 'rgba(255,255,255,0.4)',
  Black20: 'rgba(255,255,255,0.2)',
  Card:'#EFEFF4',
 
  Background:'#000000',
  // grayIcon:'#CFCFCF',
  Surface:'#ffffff',
  mainFont:'ElMessiriBold',
  FontStyleMain:{
    fontFamily:'BeVietnam'
  },
  BoldFontStyleMain:{
    fontFamily:'BoldBeVietnam'
  }



};


 
  
    // console.log('the theme is changeing',Colors)
          
export const BlurHeaderStyle = {
  headerShown:true,
  headerTransparent: true,
  headerLargeTitle:true,
  headerLargeTitleShadowVisible:false,
  headerBlurEffect:'prominent',
  headerStyle:{
    backgroundColor: 'rgba(255,255,255,0.01)'
  },
  headerLargeStyle: {
    backgroundColor: PlatformColor('systemBackground')
  }
}

export const ThemeColors ={
  bgWhite:`bg-white dark:bg-black`,
  textWhite:`text-black dark:text-white`
}

// const {colors} = useThemeStore()