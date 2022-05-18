import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Box, Text } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Format from '../helper/format';
import Rating from '../components/Rating';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

const FinishedPayment = () => {
  const { transaction } = useSelector(state => state);
  const { auth } = useSelector(state => state);
  const { detail } = useSelector(state => state);

  const vehicle = {
    name: `${transaction.dataTransaction.name}`,
    seet: `${transaction.dataTransaction.seet}`,
    price: `${transaction.dataTransaction.prepayment}`,
    image: { uri: `${detail.vehicle?.image}` },
    rating: `${transaction.dataTransaction.rating}`,
    qty: `${transaction.dataTransaction.qty}`,
    days: `${transaction.dataTransaction.days}`,
    startDate: `${transaction.dataTransaction.rentStartDate}`,
    endDate: `${transaction.dataTransaction.rentEndDate}`,
  };

  const price = vehicle.price * vehicle.qty;

  const customer = {
    id: `${auth.userData?.id}`,
    name: `${auth.userData?.name}`,
    phone: `${auth.userData?.phone}`,
    address: `${auth.userData?.address}`,
    email: `${auth.userData?.email}`,
    total: price
  };
  const navigation = useNavigation();
  return (
    <Box p="5">
      <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={'2xl'} pl="2" bold>
          See history
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          textAlign={'center'}
          my="6"
          fontSize={'2xl'}
          color="success.700"
          bold>
          Payment Success!
        </Text>
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
        <Box py={'5'}>
          <Text py={'1'}>
            {vehicle.name}
          </Text>
          <Text py={'1'}>Prepayment (no tax)</Text>
          <Text py={'1'}>
            {vehicle.startDate} to {vehicle.endDate}
          </Text>
        </Box>
        <View style={styles.borderBtm} />
        <Box>
          <Text py={'1'}>ID: {customer.id}</Text>
          <Text py={'1'}>
            {customer.name} ({customer.email})
          </Text>
          <Text py={'1'}>
            {customer.phone}{' '}
            <Text color="success.700" bold>
              Active
            </Text>
          </Text>
          <Text py={'1'}>{customer.address}</Text>
        </Box>
        <Box my="5">
          <Button color="primary">Total: {Format(customer.total)}</Button>
        </Box>
        <Box />
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgWrapper: {
    backgroundColor: 'rgba(30, 39, 46,1.0)',
    borderRadius: 20,
  },
  imageBg: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    resizeMode: 'cover',
    backgroundColor: 'gray',
  },
  borderBtm: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 30,
  },
});

export default FinishedPayment;