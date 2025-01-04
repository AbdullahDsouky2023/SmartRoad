import { View, Text, FlatList, ActivityIndicator, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import WalletComponent from './components/WalletComponent'
import { getAllUsers, User } from '~/api/user'
import AddCharge from '../../components/wallet/AddCharge'
import Transactions from '~/components/wallet/Transactions'
// import {EXPO_PUBLIC_API_KEY} from '@env'
type Props = {}
import BottomSheet from 'react-native-simple-bottom-sheet';
import { AntDesign } from '@expo/vector-icons'
import { useWallet } from '~/api/wallet'
import TransactionList from './components/TransactionsList'
import userProfileStore from '~/store/user'

const WalletScreen = (props: Props) => {
  const {user_id} = userProfileStore()
  const {wallet,refetch,isLoading} = useWallet(user_id)
  console.log("🚀 ~ WalletScreen ~ data:", wallet)
  return (
    <ScrollView 
    refreshControl={<RefreshControl onRefresh={refetch} refreshing={isLoading}/>}
    style={{
        backgroundColor:'white',
        flex:1
    }}
    >
    <Header/>
    <WalletComponent/>
    <TransactionList/>
    {/* <BottomSheet isOpen>
    <AntDesign name="staro" size={24} />
       <Text>
       The component to render inside the panel
       </Text>
        <View />
      </BottomSheet> */}
   {/* <Users/> */}
   
    </ScrollView>
  )
}

export default WalletScreen



