import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Button } from '../../components/Form/Button'

export const Resume = () => {
  const rsrs = () => {
    console.log('rsrs')
  }

  return (
    <View style={styles.container}>
      <Button title="Botão" onPress={rsrs} />
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
