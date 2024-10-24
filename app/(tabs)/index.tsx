import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button } from '~/components/Button';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Wallet Screen' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/index.tsx" title="Wallet Screen" />
        <Button title='Create Wallet'/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
