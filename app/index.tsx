import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect } from 'expo-router'

type Props = {}

// SplashScreen.preventAutoHideAsync();

const index = (props: Props) => {
 
  return <Redirect href={'/loginScreen'}/>
}

export default index