import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'

type Props = {}

// SplashScreen.preventAutoHideAsync();

const index = (props: Props) => {
  const [loaded] = useFonts({
    BeVietnam:require('../assets/fonts/BeVietnam-Regular.ttf'),
    BoldBeVietnam:require('../assets/fonts/BeVietnam-Bold.ttf'),
  });
console.log('font laed',loaded)
  useEffect(()=>{
        if(loaded){
            SplashScreen?.hideAsync()
        }
  },[loaded])
  return <Redirect href={'/(tabs)/'}/>
}

export default index