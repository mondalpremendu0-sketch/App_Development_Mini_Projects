import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
const Tablayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{
            title:"Home",
            tabBarIcon:({color,size}) => (
                <Ionicons name="home" color={color} size={size}/>)
        }}/>
    </Tabs>
  )
}

export default Tablayout
