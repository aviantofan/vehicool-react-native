import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { Box, Text } from "native-base";
import Step from "../components/Step";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Rating from "../components/Rating";
import Format from "../helper/format";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/transaction";

const PaymentStepTwo = () => {
  const { detail } = useSelector(state => state);
  const { auth } = useSelector(state => state);
  const { transaction } = useSelector(state => state);
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const vehicle = {
    vehicleId: `${detail.vehicle?.id}`,
    userId: `${auth.userData?.id}`,
    name: `${detail.vehicle?.name}`,
    seet: 2,
    stock: 5,
    prepayment: `${detail.vehicle?.price}`,
    image: { uri: `${detail.vehicle?.image}` },
    rating: 4,
    qty: `${counter.value}`,
    rentStartDate: `${transaction.dataTransaction.rentStartDate}`,
    rentEndDate: `${transaction.dataTransaction.rentEndDate}`,
  };

  const getCode = () => {
    dispatch(getData(vehicle));
    navigation.navigate("PaymentStepThree");
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
          <Step currentlyActive={2} />
        </Box>
        <Box style={styles.imgWrapper}>
          <Image
            source={vehicle.image}
            style={styles.imageBg}
            alt="photo vehicle"
          />
          <Box>
            <Rating rate={4} right={30} top={-60} />
          </Box>
        </Box>
        <Box py={"10"}>
          <Text py={"1"}>
            {vehicle.name}
          </Text>
          <Text py={"1"}>Prepayment (no tax)</Text>
          <Text py={"1"}>
            {vehicle.rentStartDate} to {vehicle.rentEndDate}
          </Text>
        </Box>
        <View style={styles.borderBtm} />
        <Box style={{ marginVertical: 30 }} flexDirection={"row"} justifyContent="space-between">
          <Text fontSize={"3xl"} bold>
            {Format(vehicle.prepayment * counter.value)}
          </Text>
          <TouchableOpacity>
            <EntypoIcon name="info-with-circle" size={40} color="#d2dae2" />
          </TouchableOpacity>
        </Box>
        <Box style={{ marginBottom: 25 }}>
          <Button
            color="secondary"
            onPress={getCode}>
            Get Payment Code
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgWrapper: {
    backgroundColor: "rgba(30, 39, 46,1.0)",
    borderRadius: 20,
  },
  imageBg: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    resizeMode: "cover",
    backgroundColor: "gray",
  },
  borderBtm: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default PaymentStepTwo;