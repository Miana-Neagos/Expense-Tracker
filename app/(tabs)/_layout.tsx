import { router, Tabs } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs 
        screenOptions={{
            headerRight: () => (
              <Pressable onPress={() => router.push("/ManageExpense")}>
                <Ionicons name="add" size={24} color="black" />
              </Pressable>
            ),
          }}
        >
            <Tabs.Screen name="RecentExpenses" options={{title: "Recent Expenses"}}/>
            <Tabs.Screen name="AllExpenses" options={{title: "All Expenses"}}/>
        </Tabs>
    )
}