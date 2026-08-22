import React from 'react'
import { Stack } from 'expo-router'




const Authlayout = () => {
  return (
   <Stack screenOptions={{
    headerShown:false
   }}>
    <Stack.Screen name="signup"/>
    <Stack.Screen name="signIn"/>
   </Stack>
  )
}

export default Authlayout
