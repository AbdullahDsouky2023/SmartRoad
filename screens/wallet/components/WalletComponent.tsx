import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FONT_FAMILY_BOLD, FONT_FAMILY_NORMAL } from '~/constant/styles'
import { Entypo } from '@expo/vector-icons'
import useWalletStore from '../../../store/wallet'
import userProfileStore from '~/store/user'
import AddCharge from '~/components/wallet/AddCharge'
import { useWallet } from '~/api/wallet'
import { getAllUsers, getUserData } from '~/api/user'
type Props = {}

const {width,height} = Dimensions.get('window')
const WalletComponent = (props: Props) => {

    
  return (
    <View
    style={styles.container}
    >
      <BlanceComponent/>
      <UserWalletComponent/>
      <AddCharge/>
    </View>
  )
}

export default WalletComponent

const styles = StyleSheet.create({
    container:{
        height:height*0.25,
        width:width*0.95,
        backgroundColor:'#05071F',
        borderRadius:25,
        alignSelf:'center',
        display:'flex',
    }
})
const BlanceComponent = ()=>{
  const {wallet,isLoading} = useWallet()
  console.log('ffwallet ',wallet)
  return(
        <Text
      style={{
        fontFamily:FONT_FAMILY_BOLD,
        color:'white',
        fontSize:50,
        paddingHorizontal:20,
        paddingVertical:10
      }}
      >
        ${wallet?.data[0]?.balance}
      </Text>
    )
}



const UserWalletComponent = ()=>{
  const {name,nationalId} = userProfileStore()
  // console.log('userData',userData)
  return(
        <View
      style={{
        paddingHorizontal:15,
        display:'flex',
        paddingVertical:20,
        flexDirection:'row',
        justifyContent: 'space-between',
      }}
      >
        <View>

        <Text
        style={{
            fontFamily:FONT_FAMILY_BOLD,
            color:'white',
            fontSize:20
        }}
        >
            {name}
        </Text>
        <Text
        style={{
            fontFamily:FONT_FAMILY_BOLD,
            color:'white',
            fontSize:20
        }}
        >
            {nationalId}
            </Text>
            </View>
        <Entypo name="wallet" size={50} color="white" />
      </View>
    )
}