import { useEffect } from "react";
import { View } from "react-native";
import { SplashScreen, Slot } from "expo-router";
import { useFonts } from "@expo-google-fonts/m-plus-rounded-1c";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    MPLUSRounded1c_400Regular,
    MPLUSRounded1c_500Medium,
    MPLUSRounded1c_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, []);

  return (
    <View>
      <Slot />
    </View>
  );
}
