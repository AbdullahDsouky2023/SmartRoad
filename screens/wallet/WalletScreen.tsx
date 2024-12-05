import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import WalletComponent from './components/WalletComponent'
import { getAllUsers, User } from '~/api/user'
// import {EXPO_PUBLIC_API_KEY} from '@env'
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
    {/* <WalletComponent/> */}
   <Users/>
    </View>
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