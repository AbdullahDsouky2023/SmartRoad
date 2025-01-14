import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'

type Props = {}

const AddCharge = (props: Props) => {
  const handelChargeWallet = ()=>{
    router?.navigate('/chargeWallet')
    console.log('charge wallet')
}
  return (
    <Pressable style={styles.container}  className=' z-10'onPress={handelChargeWallet}>
      {/* <AntDesign name="pluscircle" size={60} color="blue" /> */}
    </Pressable>
  )
}

export default AddCharge

const styles = StyleSheet.create({
  container:{
    // backgroundColor:'red'
    // position: 'absolute',
    // bottom:0,
    paddingBottom:5,
  alignItems: 'center',
  justifyContent: 'center',
  }
})