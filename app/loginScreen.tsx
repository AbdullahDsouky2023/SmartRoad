import { View, Text, Pressable } from 'react-native'
import React from 'react'
import LoginScreen from '~/screens/auth/login/LoginScreen'
import { changeLanguage } from '~/localization/helpers'
import { getLocale } from '~/localization/localize'
import { FontAwesome } from '@expo/vector-icons'

type Props = {}

const loginScreen = (props: Props) => {
  return (
    <>
  
   <LoginScreen/>
                  </>
  )
}

export default loginScreen