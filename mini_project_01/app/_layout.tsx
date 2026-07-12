import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";
import {Text} from "react-native"

export default function RootLayout() {
  return (
    <>
    
     <Stack>
      <Stack.Screen 
      name="index"
      options={{
        title:"home"
      }}
      />
    </Stack>

    
    </>
   
  )

}
