import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text, Image, Center, Radio, Stack } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';
import { useDispatch, useSelector } from 'react-redux';
import { addVehicle } from '../redux/actions/addVehicle';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const AddVehicle = () => {

  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [loc, setLoc] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [capacity, setCapacity] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [reservationBefore, setReservationBefore] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');

  const addImage = async () => {

    const photo = await launchImageLibrary({});
    setImage(photo.assets[0]);
  };

  const handlePhotoCamera = async () => {
    const photo = await launchCamera({
      maxWidth:640,
      maxHeight:640
    });
    setImage(photo.assets[0]);
  };

  const navigation = useNavigation();
  const addDataVehicle = () => {
    // const data = {
    //   name,
    //   color,
    //   loc,
    //   isAvailable,
    //   capacity,
    //   categoryId,
    //   reservationBefore,
    //   paymentMethod,
    //   price,
    //   stock,
    //   image
    // }
    // console.log(data)
    dispatch(addVehicle(
      auth.token,
      name,
      color,
      loc,
      isAvailable,
      capacity,
      categoryId,
      reservationBefore,
      paymentMethod,
      price,
      stock,
      image));
    PushNotification.localNotification({
      channelId: 'addingVehicle',
      title: 'Adding Vehicle Success!',
      message: 'Your Vehicle is ready to show!'
    });
    navigation.navigate('Home');
  };

  return (
    <View>
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Profile')}>
        <EntypoIcon
          name="chevron-left"
          color="black"
          size={35}
          style={styles.icon}
        />
        <Text fontSize={20} bold style={styles.textBack}>
          Add Vehicle
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <View style={styles.profilePict}>
            <Center>
              {image ? (
                <Image
                  source={{ uri: image.uri }}
                  size={99}
                  resizeMode={'cover'}
                  borderRadius={'full'}
                  alt="Profile Pic"
                />
              ) : (
                <Image
                  source={require('../assets/photo-camera.png')}
                  size={99}
                  resizeMode={'cover'}
                  borderRadius={'full'}
                  alt="Profile Pic"
                />
              )}
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
                value={isAvailable}
                accessibilityLabel="favorite colorscheme"
                onChange={value => { setIsAvailable(value); }}>
                <Stack
                  direction={{ base: 'row' }}
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
            <Text style={styles.label}>Payment Method:</Text>
            <View style={styles.radioGrup}>
              <Radio.Group
                defaultValue="1"
                name="myRadioGroup"
                value={paymentMethod}
                accessibilityLabel="favorite colorscheme"
                onChange={value => { setPaymentMethod(value); }}>
                <Stack
                  direction={{ base: 'row' }}
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
                value={categoryId}
                accessibilityLabel="favorite colorscheme"
                onChange={value => { setCategoryId(value); }}>
                <Stack
                  direction={{ base: 'row' }}
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
            <Button color="primary" onPress={addDataVehicle}>Add Vehicle</Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddVehicle;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    fontWeight: 'bold',
  },
  textBack: {},
  profilePict: {
    marginTop: 10,
    justifyContent: 'center',
    position: 'relative',
  },
  iconEdit: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    right: 140,
    backgroundColor: '#5C527F',
    padding: 9,
    borderRadius: 50,
  },
  iconEditCam: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 60,
    right: 140,
    backgroundColor: '#5C527F',
    padding: 9,
    borderRadius: 50,
  },
  radioGrup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textRadio: {
    marginLeft: 8,
  },
  label: {
    color: 'gray',
    marginTop: 20,
    marginBottom: 15,
  },
  input: {
    height: 50,
    color: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 15,
  },
  button: {
    marginBottom: 80,
    marginTop: 40,
  },
});