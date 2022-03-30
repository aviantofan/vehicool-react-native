import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input'

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/auth-bg.png')} resizeMode="cover" style={styles.img}>
        <Text style={styles.text}>LET`S EXPLORE</Text>
        <Text style={styles.text1}>THE WORLDS</Text>
        <SafeAreaView style={styles.form}>
          <Input
            placeholder='Username'
            keyboardType='alphanumeric'
          />
          <Input
            placeholder='Password'
            keyboardType='alphanumeric'
          />
          <Text style={styles.forgot}>Forgot Password ?</Text>
          <Button
            color='primary'
            onPress={() => alert('Login Success')}
          >Login</Button>
        </SafeAreaView>
        <Text style={styles.signup}>Don`t have account? Sign up now</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Roboto',
    lineHeight: 42,
    fontWeight: '900',
    textAlign: 'justify',
    marginVertical: 10,
    marginHorizontal: 25,
    marginTop: 100,
    marginEnd: 50,
  },
  text1: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'Roboto',
    lineHeight: 42,
    fontWeight: '900',
    textAlign: 'justify',
    marginVertical: 10,
    marginHorizontal: 25,
    marginEnd: 50,
  },
  form: {
    marginTop: 200,
  },
  forgot: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto',
    lineHeight: 19,
    fontWeight: '400',
    textAlign: 'justify',
    marginVertical: 10,
    marginHorizontal: 15,
    marginEnd: 235,
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 80,
    marginTop: 20,
    color: 'white'
  },
})

export default Login