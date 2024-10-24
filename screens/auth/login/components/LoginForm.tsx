import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import Button from './Button'
type Props = {}

const LoginForm = (props: Props) => {

    const [nationlId,setNationald]= useState('')
    const [password,setPassword]= useState('')


    const dataComplted = nationlId  && password
    const handelSubmit = ()=>{
        if(!nationlId  && !password){
            Alert.alert('Please Enter your national id')
        }else if(nationlId && !password){
            Alert.alert('Please Enter your password')

        }else if(!nationlId && password){
            Alert.alert('Please Enter your  national id ')
            
        } else if(nationlId?.length < 10){
            Alert.alert('You have to enter the complete 10 national id')
        }
         else if(password?.length < 8){
            Alert.alert('password should be length of 8 or More')
        }
        else {
            
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
         text={nationlId}
         setText={setNationald}
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