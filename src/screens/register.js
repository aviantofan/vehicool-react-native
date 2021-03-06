import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { authRegister } from "../redux/actions/register";

const Register = () => {
  const navigation = useNavigation();

  const [isEmpty, setIsEmpty] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const { register } = useSelector(state => state);

  useEffect(() => {
    dispatch({
      type: "REGISTER_CLEAR",
    });
  }, [dispatch]);

  useEffect(() => {
    if (register.isSuccess) {
      navigation.navigate("Login");
    }
  }, [register]);

  const onRegister = () => {
    if (name && username && email && password) {
      setIsEmpty(false);
      dispatch(authRegister(name, username, email, password));
      if (register.isSuccess) {
        navigation.navigate("Login");
      }
    } else {
      setIsEmpty(true);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Box style={styles.main}>
        <Image
          source={require("../assets/auth-bg.png")}
          resizeMode="cover"
          style={styles.img}
        />
        <Box style={styles.forms}>
          <Text style={styles.text}>LET`S HAVE</Text>
          <Text style={styles.text1}>SOME RIDE</Text>
          <SafeAreaView style={styles.form}>
            <Input
              placeholder='Name'
              onChangeText={setName}
              value={name}
            />
            <Input
              placeholder='Username'
              onChangeText={setUsername}
              value={username}
            />
            <Input
              placeholder='Email'
              onChangeText={setEmail}
              value={email}
            />
            <Input
              placeholder='Password'
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
          </SafeAreaView>
          <View style={styles.btn}>
            <Button
              color='primary'
              onPress={onRegister}
            >Sign Up</Button>
          </View>
          <View style={styles.loginWrapper}>
            <Text style={styles.login}>Already have an account?</Text>
            <TouchableOpacity >
              <Text style={styles.login} onPress={() => {
                navigation.navigate("Login");
              }}> Login now</Text>
            </TouchableOpacity>
          </View>
        </Box>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    position: "relative",
  },
  forms: {
    position: "absolute",
    width: "100%",
  },
  container: {
    flex: 1
  },
  img: {
    width: 502,
    height: 855,
  },
  text: {
    color: "white",
    fontSize: 36,
    fontFamily: "Roboto",
    lineHeight: 42,
    fontWeight: "900",
    textAlign: "justify",
    marginVertical: 10,
    marginHorizontal: 25,
    marginTop: 100,
    marginEnd: 50,
  },
  text1: {
    color: "white",
    fontSize: 36,
    fontFamily: "Roboto",
    lineHeight: 42,
    fontWeight: "900",
    textAlign: "justify",
    marginVertical: 10,
    marginHorizontal: 25,
    marginEnd: 50,
  },
  form: {
    marginTop: 130,
  },
  btn: {
    marginBottom: 30,
    marginHorizontal: 15,
    justifyContent: "center"
  },
  forgot: {
    color: "white",
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 19,
    fontWeight: "400",
    textAlign: "justify",
    marginVertical: 10,
    marginHorizontal: 15,
    marginEnd: 235,
  },
  loginWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  login: {
    color: "white"
  }
});

export default Register;