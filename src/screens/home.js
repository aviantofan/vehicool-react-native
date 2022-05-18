import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getCars, getMotorbike, getBike } from "../redux/actions/category";
import { getPopular } from "../redux/actions/popular";
import { getVehicleList } from "../redux/actions/listVehicle";
import { listHistory } from "../redux/actions/transaction";
import { dataUser } from "../redux/actions/auth";
import Zonk from "../assets/photo-camera.png";

const Home = () => {
  const dispatch = useDispatch();

  const data = [
    { id: 1, image: require("../assets/1.png") },
    { id: 2, image: require("../assets/2.png") },
    { id: 3, image: require("../assets/3.png") },
    { id: 4, image: require("../assets/4.png") },
  ];

  const { auth } = useSelector(state => state);
  const { category } = useSelector(state => state);
  const { popular } = useSelector(state => state);

  useEffect(() => {
    dispatch(listHistory(auth.userData?.id, auth.token));
    dispatch(dataUser(auth.token));
    dispatch(getCars());
    dispatch(getMotorbike());
    dispatch(getBike());
    dispatch(getPopular());
    dispatch(getVehicleList());
  }, [dispatch, auth.userData?.id, auth.token]);

  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity key={item.id} style={styles.coverImg} onPress={() => navigation.navigate("DetailVehicle", { id: item.id })}>
        <Image source={item.image ? { uri: `${item.image}` } : Zonk} style={styles.listImg} width={265} height={168} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Image
          source={require("../assets/header.png")}
          style={styles.headerImg}
        />
        <View style={styles.content}>
          <Title
            child={"Recommended"} resChild={"View more"} onPress={() => navigation.navigate("Category")}
          />
          <FlatList
            data={popular?.popularVehicle}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={"Hot Deals"} resChild={"View more"} onPress={() => navigation.navigate("Category")} />
          <FlatList
            data={popular?.popularVehicle}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={"Cars"} resChild={"View more"} onPress={() => navigation.navigate("Category")} />
          <FlatList
            data={category?.cars}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={"Bike"} resChild={"View more"} onPress={() => navigation.navigate("Category")} />
          <FlatList
            data={category?.bike}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={"Motorbike"} resChild={"View more"} onPress={() => navigation.navigate("Category")} />
          <FlatList
            data={category?.motorbike}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: "relative",
    height: "100%",
    backgroundColor: "rgba(154, 208, 236, 0.1)",
  },
  headerImg: {
    width: "100%",
  },
  coverImg: {
    width: 300,
    marginRight: 20,
  },
  listImg: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    margin: 20,
  },
});

export default Home;
