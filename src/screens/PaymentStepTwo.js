import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { Box, Text } from 'native-base';
import Step from '../components/Step';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Rating from '../components/Rating';
import Format from '../helper/format';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const PaymentStepTwo = () => {
  const vehicle = {
    name: 'Vespa',
    seet: 2,
    stock: 5,
    price: 50000,
    image: require('../assets/vespa.png'),
    rating: 4,
    qty: 2,
    days: 4,
    startDate: 'Jan 18 2022',
    endDate: 'Jan 22 2022',
  };
  const navigation = useNavigation()

  return (
    <Box p="5">
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={'2xl'} pl="2" bold>
          Payment
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box py={'10'}>
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
        <Box py={'10'}>
          <Text py={'1'}>
            {vehicle.qty} {vehicle.name}
          </Text>
          <Text py={'1'}>Prepayment (no tax)</Text>
          <Text py={'1'}>
            {vehicle.days} {vehicle.days === 1 ? 'day' : 'days'}
          </Text>
          <Text py={'1'}>
            {vehicle.startDate} to {vehicle.endDate}
          </Text>
        </Box>
        <View style={styles.borderBtm} />
        <Box style={{ marginVertical: 30 }} flexDirection={'row'} justifyContent="space-between">
          <Text fontSize={'3xl'} bold>
            {Format(vehicle.price * vehicle.days * vehicle.qty)}
          </Text>
          <TouchableOpacity>
            <EntypoIcon name="info-with-circle" size={40} color="#d2dae2" />
          </TouchableOpacity>
        </Box>
        <Box style={{ marginBottom: 25 }}>
          <Button
            color="secondary"
            onPress={() => navigation.navigate('PaymentStepThree')}>
            Get Payment Code
          </Button>
        </Box>
      </ScrollView>
    </Box>
  )
}

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
  },
})

export default PaymentStepTwo