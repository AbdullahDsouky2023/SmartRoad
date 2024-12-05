import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import Button from './Button'
import { router } from 'expo-router'
import userProfileStore from '~/store/user'
import { LoginUser, StoreUser } from '~/api/user'
type Props = {
    hasAccount:boolean
}

const LoginForm = ({hasAccount}: Props) => {

    const { nationalId,password,setNationalId,setPassword,name,setName} = userProfileStore()


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
    const Register = async ()=>{
        try{
            const response = await StoreUser(
                name,
                nationalId,
                password
            )
            //handle suuces navigation and store date in backend
        }catch(error){
            console.log('error login',error)
        }
    }
    const Login = async ()=>{
        try{
            const response = await LoginUser(
                nationalId,
                password
            )
            //handle suuces navigation and store date in backend
        }catch(error){
            console.log('error login',error)
        }
    }
  return (
    <View className='bg-red-400'
    style={styles?.container}
    >
      {
        !hasAccount &&
        <CustomInput
        title='Name'
        placeholder='Name'
        text={name}
        setText={setName}
        />
    }
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
        title={ hasAccount ? 'Login' : 'Register'}
        disabled={dataComplted}
        onPress={hasAccount ? Login : Register}
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