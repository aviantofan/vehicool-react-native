import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/auth-bg.png')} resizeMode="cover" style={styles.img}>
        <Text style={styles.text}>LET`S HAVE</Text>
        <Text style={styles.text1}>SOME RIDE</Text>
        <SafeAreaView style={styles.form}>
          <Input
            placeholder='Username'
            keyboardType='alphanumeric'
          />
          <Input
            placeholder='Mobile Phone'
            keyboardType='numeric'
          />
          <Input
            placeholder='Password'
            keyboardType='password'
          />
        </SafeAreaView>
        <View style={styles.btn}>
          <Button
            color='primary'
            onPress={() => alert('Register Success')}
          >Sign Up</Button>
        </View>
        <View style={styles.loginWrapper}>
          <Text style={styles.login}>Already have an account?</Text>
          <TouchableOpacity >
            <Text style={styles.login} onPress={() => {
              navigation.navigate('Login')
            }}> Login now</Text>
          </TouchableOpacity>
        </View>
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
  btn: {
    marginBottom: 30,
    marginHorizontal: 15,
    justifyContent: 'center'
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
  loginWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  login: {
    color: 'white'
  }
})

export default Register