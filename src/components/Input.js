import { TextInput, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({ placeholder, ...set }) => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='#FFFF'
        style={styles.input}
        {...set}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  input: {
    margin: 12,
    color: 'white',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255,0.5)',
    height: 60,
  },
})

export default Input
