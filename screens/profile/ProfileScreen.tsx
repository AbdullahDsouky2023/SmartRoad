import { View, Text } from 'react-native'
import React from 'react'
import Button from '../auth/login/components/Button'
import { router } from 'expo-router'
import { FONT_FAMILY_BOLD } from '~/constant/styles'
import useWalletStore from '~/store/wallet'
import userProfileStore from '~/store/user'

type Props = {}

const ProfileScreen = (props: Props) => {
  const {balance} = useWalletStore()
  const {setUser,clearAll} = userProfileStore()
    const handelChargeWallet = ()=>{
        router?.navigate('/chargeWallet')
        console.log('charge wallet')
    }
    const handleSignout = ()=>{
      setUser(null)
      clearAll()
      
        router?.navigate('/loginScreen')
    }
  return (
    <View
    style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        backgroundColor:'white'
    }}
    >
   
      <Button disabled={true} title='Charge Wallet' onPress={handelChargeWallet}/>
      <Button disabled={true} title='Logout' onPress={handleSignout}/>
    </View>
  )
}

export default ProfileScreen