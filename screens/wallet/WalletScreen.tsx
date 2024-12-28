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

const WalletScreen = (props: Props) => {
  const {wallet,refetch,isLoading} = useWallet()
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
    <Transactions/>
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




const Users = ()=>{
  const [users,setUsers] = useState(null)
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    getUsersFromApi()
  },[])
  const getUsersFromApi = async()=>{
    try{
      setLoading(true)
      const users =await getAllUsers()//users
      if(users){
        // console.log('users',users)
        setUsers(users)
      }
    }catch(err){
      console.error('error getging user from  api ',err)
    }finally{
      setLoading(false)
    }
  }
  return(
    <View style={{
      flex:1
    }}>
         {
        !loading &&
      <ActivityIndicator color={'blue'} size={150}/>
      }
      <FlatList
      data={users}
      contentContainerStyle={{
        flex:1,
        display:'flex',
        gap:4
      }}

      renderItem={(user:User)=>{
        return(
          <View className='py-4 bg-red-400 rounded-full'
          style={{
            backgroundColor:'red'
          }}
          >
            <Text className='text-red-400 text-5xl'
            
            >
              {user?.item?.username}
            </Text>
            </View>
        )
      }}  
      />
   

    </View>
  )
}