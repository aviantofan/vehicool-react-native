import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Box } from 'native-base';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Input from '../components/Input'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../redux/actions/auth';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'AUTH_CLEAR_ERR',
    });
  }, [dispatch]);

  const onLogin = () => {
    if (email && password) {
      setIsError(false);
      dispatch(authLogin(email, password));
    } else {
      setIsError(true);
    }
  }

  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      <Box style={styles.main}>
        <Image
          source={require('../assets/auth-bg.png')}
          resizeMode="cover"
          style={styles.img}
        />
        <Box style={styles.forms}>
          <Text style={styles.text}>LET`S EXPLORE</Text>
          <Text style={styles.text1}>THE WORLDS</Text>
          <SafeAreaView style={styles.form}>
            <Input
              placeholder='Email'
              onChangeText={setEmail}
              value={email}
            />
            <Input
              placeholder='Password'
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity>
              <Text style={styles.forgot} onPress={() => {
                navigation.navigate('ForgotPassword')
              }}>Forgot Password ?</Text>
            </TouchableOpacity>
          </SafeAreaView>
          <View style={styles.btn}>
            <Button
              color='primary'
              onPress={onLogin}
            >Login</Button>
          </View>
          <View style={styles.signupWrapper}>
            <Text style={styles.signup}>Don`t have account? </Text>
            <TouchableOpacity>
              <Text style={styles.signup} onPress={() => {
                navigation.navigate('Register')
              }}> Sign up now</Text>
            </TouchableOpacity>
          </View>
        </Box>
      </Box>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    position: 'relative',
  },
  forms: {
    position: 'absolute',
    width: '100%'
  },
  container: {
    flex: 1
  },
  img: {
    width: 502,
    height: 855,
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
    marginBottom: 30,
    marginHorizontal: 15,
    justifyContent: 'center'
  },
  form: {
    marginTop: 130,
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
  signupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signup: {
    color: 'white',

  }
})

export default Login