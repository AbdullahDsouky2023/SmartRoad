import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../auth/login/components/CustomInput'
import Button from '../auth/login/components/Button'
import { FONT_FAMILY_BOLD } from '~/constant/styles'
import useWalletStore from '~/store/wallet'
import { router } from 'expo-router'

type Props = {}

const ChargeWalletScreen = (props: Props) => {
    const [text,setText] = useState(0)
    const { chargeWallet} = useWalletStore()
    const handleChargeWallet = ()=>{
        console.log('the balance will be ',text)
        // if()
        Alert.alert('the balance will be '+text)
        chargeWallet(text)
        router.navigate('/(tabs)')
    }

  return (
    <View
    
    style={{
        backgroundColor:"white",
        flex:1,
        display:'flex',
        paddingHorizontal:20,
        
        // alignItems:'center',
        justifyContent:'center'
    }}
    >
      <CustomInput
      placeholder='Chage Wallet'
      title='Enter Amount'
      text={text}
      setText={setText}
      keyboardType='decimal-pad'

      />
      
      <Button
      title='Charge'
      onPress={handleChargeWallet}
      disabled={!(Number(text) <= 10) }
      />
      {
      Number(text) <= 10 &&
      <Text 
        style={{
          fontFamily:FONT_FAMILY_BOLD,
          color:'red',
          textAlign:'center'
        }}
        >
          Please Charge with more than 10$
        </Text>
        
      }
    </View>
  )
}

export default ChargeWalletScreen