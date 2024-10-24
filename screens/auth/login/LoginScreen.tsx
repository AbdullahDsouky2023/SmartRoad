import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'

type Props = {}

const LoginScreen = (props: Props) => {
  return (
    <View 
    style={styles?.container}
    >
     <Header/>
     <LoginForm/>
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