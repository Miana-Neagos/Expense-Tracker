import { router, Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../constants/styles";
import IconButton from "../../components/UI/IconButton";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: globalStyles.colors.primary200 },
        headerTintColor: globalStyles.colors.primary50,
        headerTitleAlign: "center",
        tabBarStyle: { backgroundColor: globalStyles.colors.primary200 },
        tabBarActiveTintColor: globalStyles.colors.accent500,
        tabBarInactiveTintColor: globalStyles.colors.primary50,
        headerRight: () => (
          <IconButton
            icon="add-circle"
            size={28}
            color={globalStyles.colors.accent500}
            onPress={() => {
              router.push("/ManageExpense");
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="AllExpenses"
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="RecentExpenses"
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
