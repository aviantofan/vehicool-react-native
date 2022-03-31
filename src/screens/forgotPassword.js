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

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/auth-bg.png')} resizeMode="cover" style={styles.img}>
        <Text style={styles.text}>THAT`S OKAY, WE</Text>
        <Text style={styles.text1}>GOT YOUR BACK</Text>
        <SafeAreaView style={styles.form}>
          <Text style={styles.forgot}>Enter your email to get reset password code</Text>
          <Input
            placeholder='Enter your email address'
            keyboardType='alphanumeric'
          />
        </SafeAreaView>
        <View style={styles.btn}>
          <Button
            color='primary'
            onPress={() => alert('Code Send Success')}
          >Send Code
          </Button>
          <Button
            color='secondary'
            onPress={() => alert('Code Send Success')}
          >Resend Code
          </Button>
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
  btn: {
    marginTop: 10,
    marginHorizontal: 15,
    justifyContent: 'center'
  },
  form: {
    marginTop: 150,
  },
  forgot: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 20,
  },
})

export default ForgotPassword