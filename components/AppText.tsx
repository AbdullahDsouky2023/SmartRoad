import React from 'react';
import { Text } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRTLDirection } from '~/constant/colors';
import i18n from '~/localization/localize';
type props = {
textKey: string;
style?: object;
className?:string
translated?:boolean
FValue?:number
}
const AppText = ({ textKey, style,className,translated=true, FValue,...props }:props) => {
  return (
    <Animated.View entering={FadeIn} >

    <Text style={[{
      textAlign:useRTLDirection().textAlign,
      fontSize:FValue && RFValue(FValue)
    },style]} className={`${className} font-main dark:text-white`} {...props}
    
    >
      {
        translated ? 
        i18n.t(textKey)
        :textKey
      }
    </Text>
    </Animated.View>
  );
};

export default AppText;