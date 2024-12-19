
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css'
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';
import { useFonts } from 'expo-font';



export default function RootLayout() {
	
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
			<Stack.Screen
			name='chargeWallet'
			options={{
				headerShown:false,
				presentation:'modal'
			}}
			/>
			<Stack.Screen
			name='successCharge'
			options={{
				headerShown:false,
				presentation:'transparentModal'
			}}
			/>
		</Stack>
		</SafeAreaView>

	);
}