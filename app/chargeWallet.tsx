import { View, Text } from 'react-native'
import React from 'react'
import ChargeWalletScreen from '~/screens/wallet/ChargeWalletScreen'

type Props = {}
import BottomSheet from 'react-native-simple-bottom-sheet';

const chargeWallet = (props: Props) => {
  return (
    <View style={{flex: 1}}>
     <ChargeWalletScreen/>
    
    </View>
  )
}

export default chargeWallet