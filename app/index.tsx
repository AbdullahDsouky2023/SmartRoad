import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect, SplashScreen } from 'expo-router'
import { useFonts } from 'expo-font'
import { createClient } from '@supabase/supabase-js'
import userProfileStore from '~/store/user'
import { supabase } from '~/lib/supabase'

type Props = {}

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

  const [isLoading, setIsLoading] = useState(false)
  const { setUser,email,national_id,user_id } = userProfileStore()
  
  const getUser = async()=>{
    const supbaseUser = await supabase?.auth?.getUser()
    return supbaseUser
  }
  console.log("🚀 ~ index ~ userId:", user_id,national_id,email,getUser())
  const [redirectTo, setRedirectTo] = useState<string | null>(null);


  useEffect(() => {
    if (loaded) {
      SplashScreen?.hideAsync()
    }
  }, [loaded])

  console.log("🚀 ~ index ~ redirectTo:", redirectTo)
  if (!email) {
    console.log("🚀 ~ index ~ userId:", email)
    return <Redirect href={'/loginScreen'} />
  }else {
      return <Redirect href={'/(tabs)/'} />
  }
  return <Redirect href={'/(tabs)/'} />
}

export default index