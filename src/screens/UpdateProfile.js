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
import PushNotification from 'react-native-push-notification'
import { useDispatch, useSelector } from 'react-redux';
import { dataUser, updateData } from '../redux/actions/auth';
import { launchImageLibrary } from 'react-native-image-picker';

const UpdateProfile = ({ navigation: { goBack } }) => {

  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  const [gender, setGender] = useState(`${auth.userData?.gender}`);
  const [phone, setPhone] = useState(`${auth.userData?.phone}`);
  const [birthdate, setBirthdate] = useState(`${auth.userData?.birthdate}`);
  const [address, setAddress] = useState(`${auth.userData?.address}`);
  const [image, setImage] = useState('');

  useEffect(() => {
    dispatch(dataUser(auth.token));
  }, [dispatch, auth.token]);

  const addImage = async () => {
    const photo = await launchImageLibrary({});
    setImage(photo.assets[0]);
  }

  const navigation = useNavigation()
  const update = () => {
    dispatch(updateData(
      auth.userData?.id,
      auth.token,
      gender,
      phone,
      birthdate,
      address,
      image
    ))
    console.log(image)
    PushNotification.localNotification({
      channelId: 'updateProfile',
      title: 'Update Profile Success!',
      message: 'You can see your personal information'
    })
    navigation.navigate('Profile')
  }

  return (
    <View>
      <TouchableOpacity style={styles.back} onPress={() => goBack()}>
        <EntypoIcon
          name="chevron-left"
          color="black"
          size={35}
          style={styles.icon}
        />
        <Text fontSize={20} bold style={styles.textBack}>
          Update Profile
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
                  resizeMode={'contain'}
                  borderRadius={'full'}
                  alt="Profile Pic"
                />
              ) : (
                <Image
                  source={{ uri: `${auth.userData?.image}`.replace(/localhost/g, '192.168.0.101') }}
                  size={99}
                  resizeMode={'contain'}
                  borderRadius={'full'}
                  alt="Profile Pic"
                />
              )}
            </Center>
            <TouchableOpacity onPress={addImage}>
              <View style={styles.iconEdit}>
                <MaterialIcon
                  color="white"
                  name="pencil-outline"
                  style={styles.iconPen}
                  size={21}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.radioGrup}>
            <Radio.Group
              defaultValue="1"
              name="myRadioGroup"
              value={gender}
              accessibilityLabel="favorite colorscheme"
              onChange={value => { setGender(value) }}>
              <Stack
                direction={{ base: 'row' }}
                alignItems="center"
                space={4}
                w="75%"
                maxW="300px">
                <Radio colorScheme='purple' value="Female" my={1}>
                  <Text style={styles.textRadio}>Female</Text>
                </Radio>
                <Radio colorScheme='purple' value="Male" my={1}>
                  <Text style={styles.textRadio}>Male</Text>
                </Radio>
              </Stack>
            </Radio.Group>
          </View>
          <View>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              value={`${auth.userData?.name}`}
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.label}>Email Address:</Text>
            <TextInput
              value={`${auth.userData?.email}`}
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
              value={phone}
              style={styles.input}
              onChangeText={setPhone}
            />
          </View>
          <View>
            <Text style={styles.label}>Date Of Birth:</Text>
            <TextInput
              value={birthdate}
              style={styles.input}
              onChangeText={setBirthdate}
            />
          </View>
          <View>
            <Text style={styles.label}>Delivery Address:</Text>
            <TextInput
              value={address}
              style={styles.input}
              onChangeText={setAddress}
            />
          </View>
          <View style={styles.button}>
            <Button color="primary" onPress={update}>Save change</Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

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

export default UpdateProfile