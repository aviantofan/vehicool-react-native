import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Box } from "native-base";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { authForgot } from "../redux/actions/forgot";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [isError, setIsError] = useState();
  const navigation = useNavigation();

  const { forgot } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FORGOT_CLEAR",
    });
  }, [dispatch]);

  useEffect(() => {
    if (forgot.isSuccess) {
      navigation.navigate("ChangePassword");
    }
  }, [forgot]);

  const onSubmit = () => {
    if (email) {
      setIsError(false);
      dispatch(authForgot(email));
    } else {
      setIsError(true);
    }
  };

  return (
    <View style={styles.container}>
      <Box style={styles.main}>
        <Image
          source={require("../assets/auth-bg.png")}
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
          </SafeAreaView>
          <View style={styles.btn}>
            <Button
              color='primary'
              onPress={onSubmit}
            >Send Code
            </Button>
          </View>
        </Box>
      </Box>
    </View>
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
  btn: {
    marginTop: 10,
    marginHorizontal: 15,
    justifyContent: "center"
  },
  form: {
    marginTop: 130,
  },
  forgot: {
    color: "white",
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "400",
    textAlign: "center",
    marginVertical: 10,
    marginTop: 20,
  },
});

export default ForgotPassword;