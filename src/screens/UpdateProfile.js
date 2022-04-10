import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import { Text, Image, Center, Radio, Stack } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import PushNotification from 'react-native-push-notification'
import { useDispatch, useSelector } from 'react-redux';
import { dataUser, updateData } from '../redux/actions/auth';

const UpdateProfile = ({ navigation: { goBack } }) => {

  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  useEffect(() => {
    dispatch(dataUser(auth.token));
  }, [dispatch, auth.token]);

  const dataInput = [
    { label: 'Name', value: `${auth.userData?.name}` },
    { label: 'Email Address', value: `${auth.userData?.email}` },
    { label: 'Phone Number', value: `${auth.userData?.phone}` },
    { label: 'Date of Birth', value: `${auth.userData?.birthdate}` },
    { label: 'Delivery Address', value: `${auth.userData?.address}` },
  ];

  const navigation = useNavigation()
  const update = () => {
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
              <Image
                size={99}
                resizeMode={'contain'}
                borderRadius={200}
                source={require('../assets/ava.png')}
                alt="Profile Pic"
              />
            </Center>
            <View style={styles.iconEdit}>
              <MaterialIcon
                color="white"
                name="pencil-outline"
                style={styles.iconPen}
                size={21}
              />
            </View>
          </View>
          <View style={styles.radioGrup}>
            <Radio.Group defaultValue="1" name="myRadioGroup" accessibilityLabel="favorite colorscheme">
              <Stack
                direction={{ base: 'row' }}
                alignItems="center"
                space={4}
                w="75%"
                maxW="300px">
                <Radio colorScheme='purple' value="1" my={1}>
                  <Text style={styles.textRadio}>Female</Text>
                </Radio>
                <Radio colorScheme='purple' value="2" my={1}>
                  <Text style={styles.textRadio}>Male</Text>
                </Radio>
              </Stack>
            </Radio.Group>
          </View>
          {dataInput.map((data, index) => (
            <View key={index}>
              <Text style={styles.label}>{data.label}:</Text>
              <TextInput defaultValue={data.value} style={styles.input} />
            </View>
          ))}
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