import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Text } from "native-base";
import React from "react";
import List from "../components/FavoriteList";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Favorite = () => {
  const navigation = useNavigation();
  const listVehicles = [
    {
      name: "Vespa Matic",
      seet: 2,
      stock: 14,
      price: 50000,
      image: require("../assets/vespa.png"),
      rating: 4,
    },
    {
      name: "Honda",
      seet: 2,
      stock: 14,
      price: 50000,
      image: require("../assets/honda.png"),
      rating: 4,
    },
    {
      name: "Honda",
      seet: 2,
      stock: 2,
      price: 50000,
      image: require("../assets/honda.png"),
      rating: 4,
    },
    {
      name: "KLX",
      seet: 2,
      stock: 1,
      price: 50000,
      image: require("../assets/klx.png"),
      rating: 4,
    },
    {
      name: "Vespa",
      seet: 2,
      stock: 14,
      price: 50000,
      image: require("../assets/vespa.png"),
      rating: 4,
    },
    {
      name: "Honda",
      seet: 2,
      stock: 14,
      price: 50000,
      image: require("../assets/classic.png"),
      rating: 4,
    },
    {
      name: "KLX",
      seet: 2,
      stock: 14,
      price: 50000,
      image: require("../assets/klx.png"),
      rating: 4,
    },
    {
      name: "Honda",
      seet: 2,
      stock: 14,
      price: 50000,
      image: require("../assets/honda.png"),
      rating: 4,
    },
    {
      name: "Vespa",
      seet: 2,
      stock: 14,
      price: 50000,
      image: require("../assets/vespa.png"),
      rating: 4,
    },
  ];
  return (
    <View>
      <TouchableOpacity style={styles.back} onPress={navigation.goBack}>
        <EntypoIcon
          name="chevron-left"
          color="black"
          size={35}
          style={styles.icon}
        />
        <Text fontSize={20} bold style={styles.textBack}>
          Your favourite
        </Text>
      </TouchableOpacity>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {listVehicles.map((data, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("DetailVehicle")}>
              <List
                image={data.image}
                name={data.name}
                seet={data.seet}
                stock={data.stock}
                price={data.price}
              />
            </TouchableOpacity>
          );
        })}
        <View style={styles.bottom} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  listVehicles: {
    flexDirection: "row",
    marginVertical: 18,
  },
  left: {
    position: "relative",
    width: "40%",
  },
  image: {},
  rate: {
    flexDirection: "row",
    width: 65,
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    borderRadius: 20,
    position: "absolute",
    right: -18,
    top: -10,
  },
  iconRate: {
    marginLeft: 8,
  },
  right: {
    marginLeft: 35,
    justifyContent: "space-between",
  },
  bottom: {
    paddingBottom: 40,
  },
});

export default Favorite;