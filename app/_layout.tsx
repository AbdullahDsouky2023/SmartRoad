
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css'
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

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
		}}>
    <QueryClientProvider client={queryClient}>

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
		</QueryClientProvider>
		</SafeAreaView>
		

	);
}