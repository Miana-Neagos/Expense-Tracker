import { SplashScreen, Stack, Tabs } from "expo-router";
import { ActivityIndicator, Platform, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useEffect } from "react";
import { globalStyles } from "../constants/styles";
import ExpenseContextProvider from "../store/expense-context";

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
    {/* <ExpenseContextProvider> */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: globalStyles.colors.primary200 },
          headerTintColor: globalStyles.colors.primary50,
          headerTitleAlign: "center",
          // tabBarStyle: { backgroundColor: globalStyles.colors.primary500 },
          // tabBarActiveTintColor: globalStyles.colors.accent500,
          headerTitleStyle: {
            fontFamily: Platform.select({
              android: "Roboto_700Bold",
              ios: "Roboto-Bold",
            }),
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="ManageExpense"
          options={{
            presentation: 'transparentModal',
            animation: 'slide_from_bottom',
          }}
        />
      </Stack>
    {/* </ExpenseContextProvider> */}
    </>
  );
}
