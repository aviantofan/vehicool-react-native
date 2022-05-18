import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image, Text } from 'native-base';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { dataUser } from '../redux/actions/auth';
import NoPhoto from '../assets/photo-camera.png';

const Profile = ({ navigation }) => {
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const onLogout = () => {
    dispatch({
      type: 'AUTH_LOGOUT',
    });
  };

  useEffect(() => {
    dispatch(dataUser(auth.token));
  }, [dispatch, auth.token]);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          source={auth.userData?.image ? { uri: `${auth.userData?.image}`} : NoPhoto}
          size={99}
          resizeMode={'cover'}
          borderRadius={'full'}
          alt="Profile Pic"
        />
        <View style={styles.head}>
          <Text bold fontSize="2xl" style={styles.name}>
            {auth.userData?.name}
          </Text>
          <Text bold style={styles.name}>
            {auth.userData?.email}
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.linkItem}
            onPress={() => navigation.navigate('Favorite')}>
            <Text fontSize="2xl">Your favourites</Text>
            <FaIcon name="chevron-right" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem}>
            <Text fontSize="2xl">FAQ</Text>
            <FaIcon name="chevron-right" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem}>
            <Text fontSize="2xl">Help</Text>
            <FaIcon name="chevron-right" size={25} />
          </TouchableOpacity>
          {
            auth.userData?.role === 'admin' &&
            <TouchableOpacity style={styles.linkItem}
              onPress={() => navigation.navigate('AddVehicle')}>
              <Text fontSize="2xl">Add Vehicle</Text>
              <FaIcon name="chevron-right" size={25} />
            </TouchableOpacity>
          }
          <TouchableOpacity
            style={styles.linkItem}
            onPress={() => navigation.navigate('UpdateProfile')}>
            <Text fontSize="2xl">Update profile</Text>
            <FaIcon name="chevron-right" size={25} />
          </TouchableOpacity>
        </View>
        <View>
          <Button color="primary" onPress={onLogout}>Log out</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '80%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 19,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  name: {
    marginLeft: 30,
  },
  list: {
    paddingVertical: 20,
  },
  linkItem: {
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Profile;