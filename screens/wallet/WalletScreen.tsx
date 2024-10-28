import { View, Text } from 'react-native'
import React from 'react'
import Header from './components/Header'
import WalletComponent from './components/WalletComponent'

type Props = {}

const WalletScreen = (props: Props) => {
  return (
    <View 
    style={{
        backgroundColor:'white',
        flex:1
    }}
    >
    <Header/>
    <WalletComponent/>
    </View>
  )
}

export default WalletScreen