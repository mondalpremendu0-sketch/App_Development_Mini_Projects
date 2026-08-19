
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'

const Applayout = () => {
  return (
  <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />

       <Tabs.Screen
        name="icons"
        options={{
          title: 'Icons',
          tabBarIcon: ({ color }) => <FontAwesome name="fonticons" size={24} color={color} />
        }}
      />


    </Tabs>
  )
}

export default Applayout
