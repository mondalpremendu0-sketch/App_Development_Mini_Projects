import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const Tablayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4d7965",
        tabBarInactiveTintColor: "#10231f",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="SignOut"
        options={{
          headerShown: false,
          title: "Sign out",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-out-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tablayout;
