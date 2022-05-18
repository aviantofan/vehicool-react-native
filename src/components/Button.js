import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ children, color, onPress }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={color === 'primary' ? styles.primary : styles.secondary} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#261C2C',
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'black'
  },
  secondary: {
    backgroundColor: '#5C527F',
    height: 60,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});
export default Button;