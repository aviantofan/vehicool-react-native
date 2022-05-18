import { View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Text } from "native-base";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Step from "../components/Step";
import Button from "../components/Button";
import Format from "../helper/format";
import { useNavigation } from "@react-navigation/native";
import PushNotification from "react-native-push-notification";
import { useDispatch, useSelector } from "react-redux";
import { inputTransaction } from "../redux/actions/transaction";

const PaymentStepThree = () => {

  const { transaction } = useSelector(state => state);
  const { auth } = useSelector(state => state);
  const { detail } = useSelector(state => state);
  const dispatch = useDispatch();

  const dataOrder = {
    qty: `${transaction.dataTransaction.qty}`,
    name: `${transaction.dataTransaction.name}`,
    perpayment: "no tax",
    rentStartDate: `${transaction.dataTransaction.rentStartDate}`,
    rentEndDate: `${transaction.dataTransaction.rentEndDate}`,
    price: `${transaction.dataTransaction.prepayment}`,
  };

  const price = dataOrder.price * dataOrder.qty;

  const inputData = {
    userId: `${transaction.dataTransaction.userId}`,
    vehicleId: `${transaction.dataTransaction.vehicleId}`,
    rentStartDate: `${transaction.dataTransaction.rentStartDate}`,
    rentEndDate: `${transaction.dataTransaction.rentEndDate}`,
    prepayment: price,
    isReturned: 1
  };
  const paymentFinish = () => {
    dispatch(inputTransaction(auth.token, inputData));
    PushNotification.localNotification({
      channelId: "payment",
      title: "Payment Success!",
      message: "Your vehicle is waiting for you!"
    });
    navigation.navigate("FinishedPayment");
  };
  const navigation = useNavigation();
  return (
    <Box p="5">
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={"2xl"} pl="2" bold>
          Payment
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box py={"10"}>
          <Step currentlyActive={3} />
        </Box>
        <Box
          justifyContent={"center"}
          flexDirection="column"
          alignItems={"center"}>
          <Text fontSize="lg" bold>
            Payment Code:
          </Text>
          <Text py="4" fontSize={"4xl"} bold>
            9075632
          </Text>
          <Text>Insert your payment code while you transfer booking order</Text>
          <Text>Pay before:</Text>
          <Text fontSize={"2xl"} py="5" color="red.700" bold>
            06:12:17
          </Text>
          <Text fontSize="md" color="gray.500" bold>
            Bank account information:
          </Text>
          <Text fontSize={"2xl"} py="5" bold>
            0290-9023-342-9
          </Text>
          <Text fontSize="md" color="gray.500" bold>
            {detail.vehicle?.name} {detail.vehicle?.loc}
          </Text>
          <Box py="5" style={styles.borderBtm} />
          <Text fontSize={"md"} pt="5" bold>
            Boking code:{" "}
            <Text color="success.700" fontSize="lg">
              VSP90322
            </Text>
          </Text>
          <Text>Use your booking code to pick your {detail.vehicle?.name}</Text>
          <Box style={{ marginBottom: 15 }}>
            <Button fontSize={15} color={"primary"}>
              Copy payment & Booking Code
            </Button>
          </Box>
        </Box>
        <Box>
          <Text fontSize={"lg"}>Order Details:</Text>
          <Text fontSize={"lg"}>
            {dataOrder.name}
          </Text>
          <Text fontSize={"lg"}>Prepayment (no tax)</Text>
          <Text fontSize={"lg"}>Order Details:</Text>
          <Text fontSize={"lg"}>
            {dataOrder.rentStartDate} to {dataOrder.rentEndDate}
          </Text>
          <Box py="5" style={styles.borderBtm} />
        </Box>
        <Box py="5" flexDirection={"row"} justifyContent="space-between">
          <Text fontSize={"3xl"} bold>
            {Format(dataOrder.price * dataOrder.qty)}
          </Text>
          <TouchableOpacity>
            <EntypoIcon name="info-with-circle" size={40} color="#d2dae2" />
          </TouchableOpacity>
        </Box>
        <Button
          color="secondary"
          onPress={paymentFinish}>
          Finish Payment
        </Button>
        <Box mb={"20"} />
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
  borderBtm: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: "100%",
  },
});

export default PaymentStepThree;