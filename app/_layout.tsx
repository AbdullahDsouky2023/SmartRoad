import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css'
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Toaster} from 'sonner-native'
// main.tsx or App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 2,
    },
  },
});


export default function RootLayout() {
	
	return (
		<SafeAreaView style={{
			flex:1
		}}><GestureHandlerRootView>

    <QueryClientProvider client={queryClient}>

		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="modal" options={{ presentation: "modal",          headerShown:false,
 }} />
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
		</QueryClientProvider>
		{/* <Toaster/> */}
				</GestureHandlerRootView>
		</SafeAreaView>
		

	);
}