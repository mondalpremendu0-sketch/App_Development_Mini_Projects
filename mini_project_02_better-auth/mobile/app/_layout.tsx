import { Stack } from 'expo-router';

export default function RootLayout() {

  const isLoggedIn  = false;

  return (
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)/index" />
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)/signIn" />
      </Stack.Protected>
    </Stack>
  );
}
