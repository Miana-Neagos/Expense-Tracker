import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        // headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "black",
        tabBarActiveTintColor: "#4a148c",
      }}
    >
        <Tabs.Screen name="index" options={{ title: "All Expenses" }} />
        {/* <Tabs.Screen
          name="recent-expenses"
          options={{ title: "Recent Expenses" }} />
        <Tabs.Screen
          name="manage-expense"
          options={{ title: "Manage Expense" }} /> */}
      </Tabs>
  );
};