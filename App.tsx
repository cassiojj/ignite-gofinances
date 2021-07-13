import React from "react";
import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { StatusBar } from 'react-native'

import AppLoading from "expo-app-loading";

import { ThemeProvider } from "styled-components";

import { Routes } from './src/routes'

import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";

import { AppRoutes } from "./src/routes/app.routes";
import { SignIn } from './src/screens/SignIn'

import { AuthProvider, useAuth } from './src/hooks/auth'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStorageLoadind } = useAuth();

  if (!fontsLoaded || userStorageLoadind) {
    return <AppLoading />;
  }

  return (
    // <SafeAreaProvider>
      <ThemeProvider theme={theme}>
          <StatusBar barStyle="light-content" />
          <AuthProvider>
            <Routes />
          </AuthProvider>
      </ThemeProvider>
    // </SafeAreaProvider>
  );
}
