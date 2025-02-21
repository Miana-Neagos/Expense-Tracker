import { router, Tabs } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: 'white',
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500
    //     headerRight: () => (
    //       <Pressable onPress={() => router.push("/ManageExpense")}>
    //         <Ionicons name="add" size={24} color="black" />
    //       </Pressable>
    //     ),

      
      }}
    >
      <Tabs.Screen
        name="AllExpenses"
        options={{
          title: "All Expenses",
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => (<Ionicons name="calendar" size={size} color={color}/>),
        }}
      />
      <Tabs.Screen
        name="RecentExpenses"
        options={{
          title: "Recent Expenses",
          tabBarLabel: 'Recent',
          tabBarIcon: ({color, size}) => (<Ionicons name="hourglass" size={size} color={color}/>),
        }}
      />
    </Tabs>
  );
}
