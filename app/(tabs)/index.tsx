import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import WalletScreen from '~/screens/wallet/WalletScreen';

export default function Home() {
  return (
    <>
     <WalletScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
