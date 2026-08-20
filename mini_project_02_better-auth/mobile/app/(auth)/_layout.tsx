import React from 'react'
import { Stack } from 'expo-router'
import {FontAwesome} from "@expo/vector-icons"
const Authlayout = () => {
  return (
   <Stack>
    <Stack.Screen 
      name="signIn" 
      options={{
            title: 'Home',
            tabBarIcon: ({ color }: { color: string }) => <FontAwesome size={28} name="home" color={color} />
          }}/>
    <Stack.Screen name="login"/>

   </Stack>
  )
}

export default Authlayout
