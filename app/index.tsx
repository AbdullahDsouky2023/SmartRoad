import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { getUserData } from '~/api/user'
import userProfileStore from '~/store/user'

type Props = {}

// SplashScreen.preventAutoHideAsync();
interface UserData {
  id: number;
  name: string;
  National_number: string;
  email_verified_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

const index = (props: Props) => {
  const [loaded] = useFonts({
    BeVietnam:require('../assets/fonts/BeVietnam-Regular.ttf'),
    BoldBeVietnam:require('../assets/fonts/BeVietnam-Bold.ttf'),
  });

  // const [userData, setUserData] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const {setNationalId,setName} = userProfileStore()
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const data = await getUserData(1)
        // setUserData(data)
        setName(data?.name)
        setNationalId(data?.National_number)
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])
console.log('font laed',loaded)
  useEffect(()=>{
        if(loaded){
            SplashScreen?.hideAsync()
        }
  },[loaded])

  return <Redirect href={'/(tabs)/'}/>
}

export default index