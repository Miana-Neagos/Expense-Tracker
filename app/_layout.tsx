import { Stack, Tabs } from "expo-router";
import { Platform, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontFamily: Platform.select({
            android: "Roboto_400Regular",
            ios: "Roboto-Regular",
          }),
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="ManageExpense"
        options={{
          presentation: "modal",
          title: "Manage Expense",
        }}
      />
    </Stack>
  );
}
