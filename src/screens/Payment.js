import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Box, Text } from 'native-base';
import Stepper from '../components/Step';
import InputPayment from '../components/InputNew';
import { Picker } from '@react-native-picker/picker';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
// import { dataUser, updateData } from '../redux/actions/auth'

const Payment = () => {

  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);

  const [selectPayment, setSelectPayment] = useState();
  const [isSelect, setIsSelect] = useState(false);
  const navigation = useNavigation();
  const payment = ['OVO', 'Dana', 'Virtual Account'];
  return (
    <Box p={'3'}>
      <TouchableOpacity style={styles.wrapper} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={'2xl'} pl="2" bold>
          Payment
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box py={'10'}>
          <Stepper currentlyActive={1} />
        </Box>
        <Box py="2">
          <InputPayment placeholder="ID card Number" value={`${auth.userData?.id}`} type="number-pad" />
        </Box>
        <Box py="2">
          <InputPayment placeholder="Name" value={`${auth.userData?.name}`} />
        </Box>
        <Box py="2">
          <InputPayment
            placeholder="Mobile phone (must be active)"
            type="phone-pad"
            value={`${auth.userData?.phone}`}
          />
        </Box>
        <Box py="2">
          <InputPayment placeholder="Email address" type="email-address" value={`${auth.userData?.email}`} />
        </Box>
        <Box py="2">
          <InputPayment placeholder="Location (home, office, set)" value={`${auth.userData?.address}`} />
        </Box>
        <Box py="2">
          <Picker
            style={styles.picker}
            selectedValue={selectPayment}
            onValueChange={(itemValue, itemIndex) => {
              setSelectPayment(itemValue);
              setIsSelect(true);
            }}>
            {!isSelect && (
              <Picker.Item
                style={styles.item}
                label="Payment type"
                color="gray"
              />
            )}
            {payment.map((data, index) => (
              <Picker.Item
                style={styles.item}
                key={index}
                label={data}
                value={data}
                color="gray"
              />
            ))}
          </Picker>
        </Box>
        <Box pt={'100'}>
          <Button
            color="secondary"
            onPress={() => navigation.navigate('PaymentStepTwo')}>
            See Order Details
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  picker: {
    height: 60,
    // color: 'gray',
    backgroundColor: 'rgba(178, 190, 195,0.3)',
    borderRadius: 40,
    fontSize: 20,
    paddingHorizontal: 15,
  },
});

export default Payment;