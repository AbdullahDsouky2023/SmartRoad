import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import Button from './Button'
import { router } from 'expo-router'
import userProfileStore from '~/store/user'
type Props = {}

const LoginForm = (props: Props) => {

    const { nationalId,password,setNationalId,setPassword} = userProfileStore()


    const dataComplted = nationalId  && password
    const handelSubmit = ()=>{
        if(!nationalId  && !password){
            Alert.alert('Please Enter your national id')
        }else if(nationalId && !password){
            Alert.alert('Please Enter your password')

        }else if(!nationalId && password){
            Alert.alert('Please Enter your  national id ')
            
        } else if(nationalId?.length < 10){
            Alert.alert('You have to enter the complete 10 national id')
        }
         else if(password?.length < 8){
            Alert.alert('password should be length of 8 or More')
        }
        else {
          

            router?.navigate('/(tabs)/')
            return Alert.alert('Login Successfully')
        }
    }
  return (
    <View className='bg-red-400'
    style={styles?.container}
    >
      
        <CustomInput
        title='National Id'
         placeholder='National Id'
         text={nationalId}
         setText={setNationalId}
        />
        <CustomInput
        title='Password'
         placeholder='Password'
         text={password}
         setText={setPassword}
        />
        <Button
        title='Login'
        disabled={dataComplted}
        onPress={handelSubmit}
        />
       

    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
    container:{
        marginTop:20
    },
    textInput:{
        borderWidth:1,
        padding:10,
        marginHorizontal:10,
        borderRadius:10,
        fontSize:20,
        borderColor:'gray'
    },
    label:{
        paddingHorizontal:15,
        marginVertical:20,
        fontSize:20
    },
   
});