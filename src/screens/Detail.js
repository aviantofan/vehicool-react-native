import { View, TextInput, Text as Texts, Image as Images, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text, Image, Center, Radio, Stack } from "native-base";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import DatePicker from "react-native-date-picker";
import { Picker } from "@react-native-picker/picker";
import moment from "moment";
import { getVehicleDetail, updateVehicle } from "../redux/actions/detail";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions/counter";
import NoPhoto from "../assets/photo-camera.png";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import PushNotification from "react-native-push-notification";
import { getData } from "../redux/actions/transaction";

const Detail = ({ route }) => {
  const [fav, setFav] = useState(false);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [rentStartDate, setRentStartDate] = useState(new Date());
  const [isStart, setIsStart] = useState(false);
  const [op, setOp] = useState(false);
  const [rentEndDate, setRentEndDate] = useState(new Date());
  const [isEnd, setIsEnd] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { detail } = useSelector(state => state);
  const { id: idVehicle } = route.params;
  const counter = useSelector(state => state.counter);
  const auth = useSelector(state => state.auth);

  const [name, setName] = useState(`${detail.vehicle?.name}`);
  const [color, setColor] = useState(`${detail.vehicle?.color}`);
  const [loc, setLoc] = useState(`${detail.vehicle?.loc}`);
  const [isAvailable, setIsAvailable] = useState("");
  const [isPrepay, setIsPrepay] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [capacity, setCapacity] = useState(`${detail.vehicle?.capacity}`);
  const [categoryId, setCategoryId] = useState("");
  const [reservationBefore, setReservationBefore] = useState(`${detail.vehicle?.reservationBefore}`);
  const [price, setPrice] = useState(`${detail.vehicle?.price}`);
  const [stock, setStock] = useState(`${detail.vehicle?.stock}`);
  const [image, setImage] = useState("");

  useEffect(() => {
    setName(detail.vehicle?.name ? detail.vehicle?.name : "Loading..");
    setColor(detail.vehicle?.color ? detail.vehicle?.color : "Loading..");
    setLoc(detail.vehicle?.loc ? detail.vehicle?.loc : "Loading..");
    setPrice(detail.vehicle?.price ? `${detail.vehicle?.price}` : "Loading..");
    setStock(detail.vehicle?.stock ? `${detail.vehicle?.stock}` : "Loading..");
    setCapacity(detail.vehicle?.capacity ? `${detail.vehicle?.capacity}` : "Loading..");
    setReservationBefore(detail.vehicle?.reservationBefore ? detail.vehicle?.reservationBefore : "Loading..");
  }, [
    detail.vehicle.name,
    detail.vehicle.color,
    detail.vehicle.loc,
    detail.vehicle.price,
    detail.vehicle.stock,
    detail.vehicle.capacity,
    detail.vehicle.reservationBefore
  ]);

  const addImage = async () => {

    const photo = await launchImageLibrary({});
    setImage(photo.assets[0]);
  };

  const handlePhotoCamera = async () => {
    const photo = await launchCamera({
      maxWidth: 640,
      maxHeight: 640
    });
    setImage(photo.assets[0]);
  };

  const onincrement = () => {
    dispatch(increment());
  };
  const ondecrement = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    dispatch(getVehicleDetail(idVehicle));
  }, [dispatch, idVehicle]);

  const update = () => {
    // const data = {
    //   name,
    //   color,
    //   loc,
    //   price,
    //   stock,
    //   capacity,
    //   reservationBefore,
    //   isAvailable,
    //   isPrepay,
    //   paymentMethod,
    //   categoryId,
    //   image
    // }
    // console.log(data);
    dispatch(updateVehicle(
      idVehicle,
      auth.token,
      name,
      color,
      loc,
      price,
      stock,
      capacity,
      reservationBefore,
      isAvailable,
      isPrepay,
      paymentMethod,
      categoryId,
      image
    ));
    PushNotification.localNotification({
      channelId: "updateVehicle",
      title: "Update Vehicle Success!",
      message: "Your Vehicle Update Success!"
    });
  };

  const transaction = {
    rentStartDate: moment(rentStartDate).format("YYYY/MM/DD"),
    rentEndDate: moment(rentEndDate).format("YYYY/MM/DD")
  };

  const dataTransaction = () => {
    dispatch(getData(transaction));
    navigation.navigate("Payment");
  };

  return (
    <View style={styles.wrapper}>
      {
        auth.userData?.role === "user" &&
        <>
          <View style={styles.barWrapper}>
            <View style={styles.imgWrapper}>
              <Images source={detail.vehicle?.image ? { uri: `${detail.vehicle?.image}` } : NoPhoto} style={styles.img} />
            </View>
            <View style={styles.barItem}>
              <View style={styles.barSectionLeft}>
                <TouchableOpacity onPress={navigation.goBack}>
                  <Icon name='chevron-left' size={30} color='white' />
                </TouchableOpacity>
              </View>
              <View style={styles.barSectionRight}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#3E2C41", "#5C527F"]} style={styles.barRating}>
                  <Texts style={styles.barRatings}>4.5<Icon name='star' /></Texts>
                </LinearGradient>
                <TouchableOpacity onPress={() => setFav(!fav)}>
                  {fav ? <AntDesign name='heart' size={30} color='#ed716b' /> : <AntDesign name='hearto' size={30} color='white' />}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.descWrapper}>
            <View style={styles.desc}>
              <Texts style={styles.descVehicle}>{detail.vehicle?.name} </Texts>
              <Texts style={styles.descVehicle}>Rp. {detail.vehicle?.price}/day </Texts>
            </View>
            <View style={styles.chatIcon}>
              <Ionicons name='chatbubble-outline' size={40} color='#5C527F' />
            </View>
          </View>
          <View style={styles.detailV}>
            <Texts style={styles.detailVehicle}>Max for {detail.vehicle?.capacity} person</Texts>
            {detail.vehicle?.isPrepay === 1 &&
              <Texts style={styles.detailVehicle}>Prepayment</Texts>
            }
            {detail.vehicle?.isPrepay === 0 &&
              <Texts style={styles.detailVehicle}>No Prepayment</Texts>
            }
            {detail.vehicle?.isAvailable === 1 &&
              <Texts style={styles.detailVehicleSuccess}>Available</Texts>
            }
            {detail.vehicle?.isAvailable === 0 &&
              <Texts style={styles.detailVehicleWarning}>Not Available</Texts>
            }
          </View>
          <View></View>
          <View style={styles.locWrapper}>
            <Icon style={styles.loc} name='map-marker' size={30} color='#3E2C41' />
            <Texts style={styles.locText}>{detail.vehicle?.loc}</Texts>
          </View>
          <View style={styles.direction}>
            <MaterialIcon style={styles.direct} name='walk' size={30} color='#3E2C41' />
            <Texts style={styles.directText}>3.2 miles from your location</Texts>
          </View>
          <View style={styles.qtyWrapper}>
            <Texts style={styles.selectQty}>Select Bikes</Texts>
            <View style={styles.counters}>
              <TouchableOpacity style={styles.counter} onPress={onincrement}>
                <Texts style={{ alignSelf: "center", fontSize: 20, fontWeight: "bold" }}>
                  +
                </Texts>
              </TouchableOpacity>
              <Texts style={{ color: "black", marginLeft: 20, marginRight: 20, alignSelf: "center", fontSize: 15, fontWeight: "bold" }}>
                {counter.value}
              </Texts>
              <TouchableOpacity style={styles.counter} onPress={ondecrement}>
                <Texts style={{ alignSelf: "center", fontSize: 20, fontWeight: "bold" }}>
                  -
                </Texts>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 19, marginLeft: 19, marginRight: 19, justifyContent: "space-between", flexDirection: "row" }}>
            <TouchableOpacity style={styles.datePick}>
              <TouchableOpacity
                title={String(rentStartDate)}
                onPress={() => setOpen(true)}>
                <Texts style={{ color: "black" }}>
                  {isStart ? moment(rentStartDate).format("YYYY/MM/DD") : "Rent Start Date"}
                </Texts>
              </TouchableOpacity>
              <DatePicker
                style={styles.datePicker}
                fadeToColor="white"
                theme="dark"
                textColor="white"
                modal
                mode="date"
                open={open}
                date={rentStartDate}
                onConfirm={dateItem => {
                  setOpen(false);
                  setRentStartDate(dateItem);
                  setIsStart(true);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.datePick}>
              <TouchableOpacity
                title={String(rentEndDate)}
                onPress={() => setOp(true)}>
                <Texts style={{ color: "black" }}>
                  {isEnd ? moment(rentEndDate).format("YYYY/MM/DD") : "Rent End Date"}
                </Texts>
              </TouchableOpacity>
              <DatePicker
                style={styles.datePicker}
                fadeToColor="white"
                theme="dark"
                textColor="white"
                modal
                mode="date"
                open={op}
                date={rentEndDate}
                onConfirm={dateItem => {
                  setOp(false);
                  setRentEndDate(dateItem);
                  setIsEnd(true);
                }}
                onCancel={() => {
                  setOp(false);
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <Button onPress={dataTransaction}>Reservation</Button>
          </View>
        </>
      }

      {
        auth.userData?.role === "admin" &&
        <View>
          <TouchableOpacity style={styles.back} onPress={navigation.goBack}>
            <EntypoIcon
              name="chevron-left"
              color="black"
              size={35}
              style={styles.icon}
            />
            <Text fontSize={20} bold style={styles.textBack}>
              Update Vehicle
            </Text>
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.wrapper1}>
              <View style={styles.profilePict}>
                <Center>
                  <Image
                    source={image ? { uri: image.uri } : detail.vehicle?.image ? { uri: `${detail.vehicle?.image}` } : NoPhoto}
                    size={99}
                    resizeMode={"cover"}
                    borderRadius={"full"}
                    alt="Profile Pic"
                  />
                </Center>
                <TouchableOpacity onPress={addImage}>
                  <View style={styles.iconEdit}>
                    <MaterialIcon
                      color="white"
                      name="plus"
                      style={styles.iconPen}
                      size={21}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePhotoCamera}>
                  <View style={styles.iconEditCam}>
                    <MaterialIcon
                      color="white"
                      name="camera"
                      style={styles.iconPen}
                      size={21}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>Color:</Text>
                <TextInput
                  value={color}
                  onChangeText={setColor}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>Location:</Text>
                <TextInput
                  value={loc}
                  onChangeText={setLoc}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>Price:</Text>
                <TextInput
                  value={price}
                  onChangeText={setPrice}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>Stock:</Text>
                <TextInput
                  value={stock}
                  onChangeText={setStock}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>Capacity:</Text>
                <TextInput
                  value={capacity}
                  onChangeText={setCapacity}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>Reservation Before:</Text>
                <TextInput
                  value={reservationBefore}
                  onChangeText={setReservationBefore}
                  style={styles.input}
                />
              </View>
              <View>
                <Text style={styles.label}>Available:</Text>
                <View style={styles.radioGrup}>
                  <Radio.Group
                    defaultValue="1"
                    name="myRadioGroup"
                    value={isAvailable ? isAvailable : detail.vehicle?.isAvailable ? `${detail.vehicle?.isAvailable}` : ""}
                    accessibilityLabel="favorite colorscheme"
                    onChange={value => { setIsAvailable(value); }}>
                    <Stack
                      direction={{ base: "row" }}
                      alignItems="center"
                      space={4}
                      w="75%"
                      maxW="300px">
                      <Radio colorScheme='purple' value="1" my={1}>
                        <Text style={styles.textRadio}>Available</Text>
                      </Radio>
                      <Radio colorScheme='purple' value="0" my={1}>
                        <Text style={styles.textRadio}>Not Available</Text>
                      </Radio>
                    </Stack>
                  </Radio.Group>
                </View>
              </View>
              <View>
                <Text style={styles.label}>Prepayment:</Text>
                <View style={styles.radioGrup}>
                  <Radio.Group
                    defaultValue="1"
                    name="myRadioGroup"
                    value={isPrepay ? isPrepay : detail.vehicle?.isPrepay ? `${detail.vehicle?.isPrepay}` : ""}
                    accessibilityLabel="favorite colorscheme"
                    onChange={value => { setIsPrepay(value); }}>
                    <Stack
                      direction={{ base: "row" }}
                      alignItems="center"
                      space={4}
                      w="75%"
                      maxW="300px">
                      <Radio colorScheme='purple' value="1" my={1}>
                        <Text style={styles.textRadio}>Has Prepayment</Text>
                      </Radio>
                      <Radio colorScheme='purple' value="0" my={1}>
                        <Text style={styles.textRadio}>Can't Prepayment</Text>
                      </Radio>
                    </Stack>
                  </Radio.Group>
                </View>
              </View>
              <View>
                <Text style={styles.label}>Payment Method:</Text>
                <View style={styles.radioGrup}>
                  <Radio.Group
                    defaultValue="1"
                    name="myRadioGroup"
                    value={paymentMethod ? paymentMethod : detail.vehicle?.paymentMethod ? `${detail.vehicle?.paymentMethod}` : ""}
                    accessibilityLabel="favorite colorscheme"
                    onChange={value => { setPaymentMethod(value); }}>
                    <Stack
                      direction={{ base: "row" }}
                      alignItems="center"
                      space={4}
                      w="75%"
                      maxW="300px">
                      <Radio colorScheme='purple' value="Cash" my={1}>
                        <Text style={styles.textRadio}>Cash</Text>
                      </Radio>
                      <Radio colorScheme='purple' value="Transfer" my={1}>
                        <Text style={styles.textRadio}>Transfer</Text>
                      </Radio>
                      <Radio colorScheme='purple' value="Excash" my={1}>
                        <Text style={styles.textRadio}>Excash</Text>
                      </Radio>
                    </Stack>
                  </Radio.Group>
                </View>
              </View>
              <View>
                <Text style={styles.label}>Category:</Text>
                <View style={styles.radioGrup}>
                  <Radio.Group
                    defaultValue="1"
                    name="myRadioGroup"
                    value={categoryId ? categoryId : detail.vehicle?.categoryId ? `${detail.vehicle?.categoryId}` : ""}
                    accessibilityLabel="favorite colorscheme"
                    onChange={value => { setCategoryId(value); }}>
                    <Stack
                      direction={{ base: "row" }}
                      alignItems="center"
                      space={4}
                      w="75%"
                      maxW="300px">
                      <Radio colorScheme='purple' value="1" my={1}>
                        <Text style={styles.textRadio}>Car</Text>
                      </Radio>
                      <Radio colorScheme='purple' value="2" my={1}>
                        <Text style={styles.textRadio}>Motorbike</Text>
                      </Radio>
                      <Radio colorScheme='purple' value="3" my={1}>
                        <Text style={styles.textRadio}>Bike</Text>
                      </Radio>
                    </Stack>
                  </Radio.Group>
                </View>
              </View>
              <View style={styles.button}>
                <Button color="primary" onPress={update}>Save Changes</Button>
              </View>
            </View>
          </ScrollView>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    height: "100%"
  },
  imgWrapper: {
    height: 250,
    justifyContent: "center"
  },
  img: {
    width: "100%",
    height: 299
  },
  barWrapper: {
    position: "relative"
  },
  barItem: {
    flexDirection: "row",
    paddingHorizontal: 19,
    paddingVertical: 12,
    position: "absolute"
  },
  barSectionLeft: {
    flex: 1
  },
  barSectionRight: {
    flexDirection: "row"
  },
  barRating: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 40,
    marginRight: 11
  },
  barRatingText: {
    color: "white"
  },
  descWrapper: {
    flexDirection: "row"
  },
  desc: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 19
  },
  chatIcon: {
    flexDirection: "row",
    marginTop: 30,
    paddingHorizontal: 19,
  },
  descVehicle: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
  },
  detailV: {
    marginTop: 20,
    paddingHorizontal: 19,
  },
  detailVehicle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailVehicleSuccess: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailVehicleWarning: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
  locWrapper: {
    marginTop: 20,
    flexDirection: "row"
  },
  loc: {
    backgroundColor: "#6E85B2",
    width: 45,
    height: 45,
    borderRadius: 10,
    marginTop: 19,
    marginLeft: 19,
    paddingVertical: 8,
    textAlign: "center",
    alignItems: "center"
  },
  locText: {
    marginTop: 19,
    marginLeft: 19,
    paddingVertical: 8,
    color: "black"
  },
  direction: {
    marginTop: 10,
    flexDirection: "row"
  },
  direct: {
    backgroundColor: "#6E85B2",
    width: 45,
    height: 45,
    borderRadius: 10,
    marginTop: 19,
    marginLeft: 19,
    paddingVertical: 8,
    textAlign: "center",
    alignItems: "center"
  },
  directText: {
    marginTop: 19,
    marginLeft: 19,
    paddingVertical: 8,
    color: "black"
  },
  qtyWrapper: {
    flexDirection: "row",
    marginTop: 10,
    flexDirection: "row",
    marginLeft: 19,
    marginTop: 20,
  },
  selectQty: {
    flex: 1,
    marginTop: 19,
    color: "black",
    fontSize: 15,
    fontWeight: "bold"
  },
  counter: {
    backgroundColor: "#6E85B2",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  counters: {
    flexDirection: "row",
    marginTop: 19,
    marginRight: 19
  },
  btn: {
    marginHorizontal: 19,
    fontSize: 50,
    fontWeight: "bold"
  },
  datePick: {
    borderRadius: 10,
    backgroundColor: "rgba(57, 57, 57, 0.15)",
    padding: 15,
    width: "50%",
  },
  wrapper1: {
    padding: 20,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icon: {
    fontWeight: "bold",
  },
  profilePict: {
    marginTop: 10,
    justifyContent: "center",
    position: "relative",
  },
  iconEdit: {
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
    right: 140,
    backgroundColor: "#5C527F",
    padding: 9,
    borderRadius: 50,
  },
  iconEditCam: {
    position: "absolute",
    alignSelf: "center",
    bottom: 60,
    right: 140,
    backgroundColor: "#5C527F",
    padding: 9,
    borderRadius: 50,
  },
  radioGrup: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textRadio: {
    marginLeft: 8,
  },
  label: {
    color: "gray",
    marginTop: 20,
    marginBottom: 15,
  },
  input: {
    height: 50,
    color: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 15,
  },
  button: {
    marginBottom: 80,
    marginTop: 40,
  },
});

export default Detail;