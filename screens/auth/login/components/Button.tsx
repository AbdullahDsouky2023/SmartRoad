import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FONT_FAMILY_BOLD } from '~/constant/styles'
import AppText from '~/components/AppText'

type Props = {
    onPress:()=>void
    title:string
    disabled:boolean
}

const Button = ({
    onPress,
    disabled,
    title
}: Props) => {
  return (
       <Pressable style={[styles?.button,{
            backgroundColor:disabled ? 'black' :'gray'
         }]}
         disabled={!disabled}
         onPress={onPress}
         >
        <AppText
        textKey=  {title}
        style={{
            color:'white',
            fontSize:20,        fontFamily:FONT_FAMILY_BOLD,

        }}
        
          
        />
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:'black',
        width:300,
        height:50,
        borderRadius:15,
        alignSelf:'center',
        marginVertical:25,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    } 
});