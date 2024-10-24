
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css'
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';
import { useFonts } from 'expo-font';



export default function RootLayout() {
	const [loaded] = useFonts({
        BeVietnam:require('../assets/fonts/BeVietnam-Regular.ttf'),
        BoldBeVietnam:require('../assets/fonts/BeVietnam-Bold.ttf'),
      });
	  console.log('font laed',loaded)
      useEffect(()=>{
            if(loaded){
                SplashScreen?.hideAsync()
            }
      },[loaded])
	return (
		<SafeAreaView style={{
			flex:1
		}}>

		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="modal" options={{ presentation: "modal" }} />
			<Stack.Screen
			name='loginScreen'
			options={{
				headerShown:false
			}}
			/>
		</Stack>
		</SafeAreaView>

	);
}