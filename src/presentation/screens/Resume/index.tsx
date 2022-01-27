import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Button } from '../../components/Form/Button'

export const Resume = () => {
  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      // clear error
    }

    console.log('Done.')
  }

  return (
    <View style={styles.container}>
      <Button title="Clear Async Storage" onPress={clearAll} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
