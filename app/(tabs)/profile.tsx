import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';
import ProfileScreen from '~/screens/profile/ProfileScreen';

export default function Home() {
  return (
      <ProfileScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
