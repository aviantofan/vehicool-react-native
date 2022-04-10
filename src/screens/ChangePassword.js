import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';

import { Box } from 'native-base';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Input from '../components/Input'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { changePass } from '../redux/actions/change';

const ChangePassword = () => {
  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isError, setIsError] = useState();
  const navigation = useNavigation()

  const { change } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'CHANGE_CLEAR',
    });
  }, [dispatch]);

  useEffect(() => {
    if (change.isSuccess) {
      navigation.navigate('Login');
    }
  }, [change]);

  const onSubmit = () => {
    if (email && code && password && confirmPassword) {
      setIsError(false);
      dispatch(changePass(email, code, password, confirmPassword));
    } else {
      setIsError(true);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Box style={styles.main}>
        <Image
          source={require('../assets/auth-bg.png')}
          resizeMode="cover"
          style={styles.img}
        />
        <Box style={styles.forms}>
          <Text style={styles.text}>THAT`S OKAY, WE</Text>
          <Text style={styles.text1}>GOT YOUR BACK</Text>
          <SafeAreaView style={styles.form}>
            <Text style={styles.forgot}>Enter your email to get reset password code</Text>
            <Input
              placeholder='Enter your email address'
              onChangeText={setEmail}
              value={email}
            />
            <Input
              placeholder='Enter your OTP code'
              onChangeText={setCode}
              value={code}
            />
            <Input
              placeholder='Input your new password'
              onChangeText={setPassword}
              value={password}
            />
            <Input
              placeholder='Confirmation your new password'
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          </SafeAreaView>
          <View style={styles.btn}>
            <Button
              color='primary'
              onPress={onSubmit}
            >Change Password
            </Button>
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
    width: '100%',
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
    marginTop: 10,
    marginHorizontal: 15,
    justifyContent: 'center'
  },
  form: {
    marginTop: 50,
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

export default ChangePassword