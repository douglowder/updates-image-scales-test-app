import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import { HomeTabsNavigator } from "./home-tabs-navigator";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync()
  // .then((result) => console.log(`tops SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error

export const navigationRef = createNavigationContainerRef();

export function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    SpaceMono: require("@assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
    ...MaterialCommunityIcons.font,
  });

  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar animated={false} />
      <RootLayoutNav />
    </>
  );
}

function RootLayoutNav({}: {}) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="BottomTabsStack" options={{ headerShown: false }} component={HomeTabsNavigator} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
