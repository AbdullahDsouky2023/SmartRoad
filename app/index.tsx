import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font';

type Props = {}

// SplashScreen.preventAutoHideAsync();

const index = (props: Props) => {
 
  return <Redirect href={'/loginScreen'}/>
}

export default index