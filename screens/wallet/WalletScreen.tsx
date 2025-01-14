import { View, Text, FlatList, ActivityIndicator, ScrollView, RefreshControl, Pressable } from 'react-native'
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
import { changeLanguage } from '~/localization/helpers'
import { getLocale } from '~/localization/localize'
import { Redirect } from 'expo-router'
import { LanguageSwitch } from '../auth/login/LoginScreen'

const WalletScreen = (props: Props) => {
  const {user_id} = userProfileStore()
  const {wallet,refetch,isLoading} = useWallet(user_id)
  console.log("🚀 ~ WalletScreen ~ data:", wallet)
  if(!wallet && !isLoading){
    return <Redirect href={'/loginScreen'}/>
  }
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    refreshControl={<RefreshControl onRefresh={refetch} refreshing={isLoading}/>}
    style={{
        backgroundColor:'white',
        flex:1
    }}
    >
          <LanguageSwitch/>
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



