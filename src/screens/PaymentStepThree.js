import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Box, Text } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Step from '../components/Step';
import Button from '../components/Button';
import Format from '../helper/format';
import { useNavigation } from '@react-navigation/native';

const PaymentStepThree = () => {
  const dataOrder = {
    qty: 2,
    name: 'Vespa',
    perpayment: 'no tax',
    days: 4,
    startDate: 'Jan 18 2022',
    endDate: 'Jan 22 2022',
    price: 50000,
  }
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
          <Step currentlyActive={3} />
        </Box>
        <Box
          justifyContent={'center'}
          flexDirection="column"
          alignItems={'center'}>
          <Text fontSize="lg" bold>
            Payment Code:
          </Text>
          <Text py="4" fontSize={'4xl'} bold>
            9075632
          </Text>
          <Text>Insert your payment code while you transfer booking order</Text>
          <Text>Pay before:</Text>
          <Text fontSize={'2xl'} py="5" color="red.700" bold>
            06:12:17
          </Text>
          <Text fontSize="md" color="gray.500" bold>
            Bank account information:
          </Text>
          <Text fontSize={'2xl'} py="5" bold>
            0290-9023-342-9
          </Text>
          <Text fontSize="md" color="gray.500" bold>
            Vespa Rental Jogja
          </Text>
          <Box py="5" style={styles.borderBtm} />
          <Text fontSize={'md'} pt="5" bold>
            Boking code:{' '}
            <Text color="success.700" fontSize="lg">
              VSP90322
            </Text>
          </Text>
          <Text>Use your booking code to pick your vespa</Text>
          <Box style={{ marginBottom: 15 }}>
            <Button fontSize={15} color={'primary'}>
              Copy payment & Booking Code
            </Button>
          </Box>
        </Box>
        <Box>
          <Text fontSize={'lg'}>Order Details:</Text>
          <Text fontSize={'lg'}>
            {dataOrder.qty} {dataOrder.name}
          </Text>
          <Text fontSize={'lg'}>Prepayment (no tax)</Text>
          <Text fontSize={'lg'}>
            {dataOrder.days} {dataOrder.days > 1 ? 'Days' : 'Day'}
          </Text>
          <Text fontSize={'lg'}>Order Details:</Text>
          <Text fontSize={'lg'}>
            {dataOrder.startDate} to {dataOrder.endDate}
          </Text>
          <Box py="5" style={styles.borderBtm} />
        </Box>
        <Box py="5" flexDirection={'row'} justifyContent="space-between">
          <Text fontSize={'3xl'} bold>
            {Format(dataOrder.price * dataOrder.days * dataOrder.qty)}
          </Text>
          <TouchableOpacity>
            <EntypoIcon name="info-with-circle" size={40} color="#d2dae2" />
          </TouchableOpacity>
        </Box>
        <Button
          color="secondary"
          onPress={() => navigation.navigate('FinishedPayment')}>
          Finish Payment
        </Button>
        <Box mb={'20'} />
      </ScrollView>
    </Box>
  )
}

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderBtm: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
  },
})

export default PaymentStepThree