import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import { Link } from 'expo-router'
import { FONT_FAMILY_BOLD, FONT_FAMILY_NORMAL } from '~/constant/styles'
import { changeLanguage } from '~/localization/helpers'
import { getLocale } from '~/localization/localize'
import { FontAwesome } from '@expo/vector-icons'
import AppText from '~/components/AppText'

type Props = {}

const LoginScreen = (props: Props) => {
  const [hasAccount, setHasAccount] = useState(true)
  return (
    <View className='bg-white'>
    <LanguageSwitch/>
    <View
      style={styles?.container}
      >
      <Header />
      <LoginForm hasAccount={hasAccount} />
     <FooterMessage hasAccount={hasAccount} setHasAccount={setHasAccount}/>
    </View>
      </View>
  )
}

export default LoginScreen

export const LanguageSwitch = ()=>{
  return(
    <Pressable
    onPress={()=>{
      // setIsLoading(true)
      changeLanguage()
    }}
    className=' bg-[#71b3cf] rounded-full h-[30px]  flex items-center justify-center flex-row gap-2   px-2'
    style={{
      width:100,
      marginTop:20
    }}
    >
   <Text>
    {getLocale() === 'ar' ? 'En' :'ع'}
    </Text>
   <FontAwesome name="globe" size={24} color="gray" />    
    </Pressable>
  )
}
const FooterMessage = ({hasAccount,setHasAccount}:{hasAccount:boolean,setHasAccount:()=>void})=>{
  return (

    <>
 {!hasAccount ?  <View className='flex flex-row gap-2 items-center justify-center'>
      <AppText style={{
        textAlign: 'center',
        fontFamily: FONT_FAMILY_NORMAL
      }}
      textKey="Have an account"
      />
      <Pressable onPress={() => setHasAccount(!hasAccount)}>
          <AppText
          textKey='Login'
          style={{
            fontFamily: FONT_FAMILY_BOLD,
            color: "blue",

          }
          }/>

         
        </Pressable>
      </View> : 
      <View className='flex flex-row gap-2 items-center justify-center'>
      <AppText style={{
        textAlign: 'center',
        fontFamily: FONT_FAMILY_NORMAL
      }}
      textKey="Don't have an account"
      />
      <Pressable onPress={() => setHasAccount(!hasAccount)}>
          <AppText
          textKey='Create One'
          style={{
            fontFamily: FONT_FAMILY_BOLD,
            color: "blue",

          }
          }/>

         
        </Pressable>
      </View>
      }
    </>
)
  
}
const styles = StyleSheet.create({
  container: {
    // flex:1,
    height: '100%',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 50,
    color: 'blue',
    fontFamily: 'BeVietnam'
  }
})