import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import { Link } from 'expo-router'
import { FONT_FAMILY_BOLD, FONT_FAMILY_NORMAL } from '~/constant/styles'

type Props = {}

const LoginScreen = (props: Props) => {
  const [hasAccount, setHasAccount] = useState(true)
  return (
    <View
      style={styles?.container}
    >
      <Header />
      <LoginForm hasAccount={hasAccount} />
     <FooterMessage hasAccount={hasAccount} setHasAccount={setHasAccount}/>
    </View>
  )
}

export default LoginScreen
const FooterMessage = ({hasAccount,setHasAccount}:{hasAccount:boolean,setHasAccount:()=>void})=>{
  return (

    <>
 {!hasAccount ? <Text style={{
        color: "blue",
        textAlign: 'center',
        fontFamily: FONT_FAMILY_NORMAL
      }}>
        Have An account? <Pressable onPress={() => setHasAccount(!hasAccount)}>
          <Text style={{
            fontFamily: FONT_FAMILY_BOLD,
          }
          }>

            Login Now
          </Text>
        </Pressable>
      </Text> : <Text style={{
        color: "blue",
        textAlign: 'center',
        fontFamily: FONT_FAMILY_NORMAL
      }}>
        Don't Have An account? <Pressable onPress={() => setHasAccount(!hasAccount)}>
          <Text style={{
            fontFamily: FONT_FAMILY_BOLD,
          }
          }>

            Create One
          </Text>
        </Pressable>
      </Text>
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