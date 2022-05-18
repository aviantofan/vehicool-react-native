import { View, ScrollView, TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'
import ListHistories from '../components/ListHistories';
import { useSelector } from 'react-redux';

const History = () => {

  const { transaction } = useSelector(state => state)

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
          {transaction.histories ?
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
            :
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