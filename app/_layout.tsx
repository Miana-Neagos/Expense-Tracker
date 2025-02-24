import { SplashScreen, Stack, Tabs } from "expo-router";
import { ActivityIndicator, Platform, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontIsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontIsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontIsLoaded]);

  if (!fontIsLoaded) {
    return (
      <View>
        <ActivityIndicator size='large'/>
      </View>
    )
  }

  return (
    <>
      <StatusBar style="light" />
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
    </>
  );
}
