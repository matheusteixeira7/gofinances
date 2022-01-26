/* eslint-disable import/no-duplicates */
import 'react-native-gesture-handler'

/* eslint-disable camelcase */
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'

import theme from './src/presentation/styles/theme'
import { AppRoutes } from './src/routes/app.routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={styles.gestureHandler}>
          <AppRoutes />
        </GestureHandlerRootView>
      </ThemeProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
})
