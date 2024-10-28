import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import { Link } from 'expo-router'
import { FONT_FAMILY_BOLD, FONT_FAMILY_NORMAL } from '~/constant/styles'

type Props = {}

const LoginScreen = (props: Props) => {
  return (
    <View 
    style={styles?.container}
    >
     <Header/>
     <LoginForm/>
     <Text style={{
      color:"blue",
      textAlign:'center',
      fontFamily:FONT_FAMILY_NORMAL
     }}>
      Don't Have An account? <Link style={{
              fontFamily:FONT_FAMILY_BOLD,

      }} href={'/'}>
      Create One
      </Link>
     </Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    // flex:1,
    height:'100%',
    backgroundColor:'white'
  },
  text:{
    fontSize:50,
    color:'blue',
    fontFamily:'BeVietnam'
  }
})