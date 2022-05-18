import { View, ScrollView, TouchableOpacity, StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListHistories from '../components/ListHistories';
import { useDispatch, useSelector } from 'react-redux';
import { listHistory } from '../redux/actions/transaction';

const History = () => {
  const dispatch = useDispatch()
  const { transaction } = useSelector(state => state)
  const { auth } = useSelector(state => state)
  useEffect(() => {
    dispatch(listHistory(auth.userData?.id, auth.token))
  }, [dispatch, auth.userData?.id, auth.token]);

  const listHistories = [
    {
      id: 1,
      name: 'No Data',
      rentStartDate: 'Null',
      rentEndDate: 'Null',
      prepayment: 'Null',
      image: require('../assets/photo-camera.png'),
      returned: 'No Data',
    },
    {
      id: 2,
      name: 'No Data',
      rentStartDate: 'Null',
      rentEndDate: 'Null',
      prepayment: 'Null',
      image: require('../assets/photo-camera.png'),
      returned: 'No Data',
    },
    {
      id: 3,
      name: 'No Data',
      rentStartDate: 'Null',
      rentEndDate: 'Null',
      prepayment: 'Null',
      image: require('../assets/photo-camera.png'),
      returned: 'No Data',
    },
    {
      id: 4,
      name: 'No Data',
      rentStartDate: 'Null',
      rentEndDate: 'Null',
      prepayment: 'Null',
      image: require('../assets/photo-camera.png'),
      returned: 'No Data',
    },
    {
      id: 5,
      name: 'No Data',
      rentStartDate: 'Null',
      rentEndDate: 'Null',
      prepayment: 'Null',
      image: require('../assets/photo-camera.png'),
      returned: 'No Data',
    },
  ];

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {transaction.isSuccess === true &&
            transaction.histories.map((data, index) => (
              <TouchableOpacity key={data.id}>
                <ListHistories
                  image={{ uri: `${data.image}` }}
                  name={data.vehicleName}
                  rentStartDate={data.rentStartDate}
                  rentEndDate={data.rentEndDate}
                  prepayment={data.prepayment}
                  returned={data.isReturned}
                />
              </TouchableOpacity>
            ))
          }
          {
            transaction.isSuccess === false &&
            listHistories.map((data, index) => (
              <TouchableOpacity key={data.id}>
                <ListHistories
                  image={data.image}
                  name={data.name}
                  rentStartDate={data.rentStartDate}
                  rentEndDate={data.rentEndDate}
                  prepayment={data.prepayment}
                  returned={data.returned}
                />
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
  },
  container: {
    paddingLeft: 20
  },
  search: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 19,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
})

export default History