import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Image, Text } from 'native-base';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const ListHistories = ({ image, name, rentStartDate, rentEndDate, prepayment, returned, ...set }) => {
  return (
    <View style={styles.listVehicles}>
      <View style={styles.left}>
        <Image
          source={image}
          alt={name}
          resizeMode={'cover'}
          width={150}
          height={120}
          borderRadius={30}
          style={styles.image}
        />
      </View>
      <View style={styles.right}>
        <View>
          <Text fontSize={'lg'} bold>
            {name}
          </Text>
          <Text>{rentStartDate} to {rentEndDate}</Text>
          <Text>Prepayment: {prepayment}</Text>
          {
            returned === 1 &&
            <Text style={styles.textReturned}>
              Has been returned
            </Text>
          }
          {
            returned === 0 &&
            <Text style={styles.textNotReturned}>
              Has not returned
            </Text>
          }
          {
            returned === 'No Data' &&
            <Text style={styles.textNoData}>
              There's no data
            </Text>
          }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listVehicles: {
    flexDirection: 'row',
    marginVertical: 18,
  },
  left: {
    position: 'relative',
    width: '40%',
  },
  right: {
    marginLeft: 35,
    justifyContent: 'space-between',
  },
  textReturned: {
    color: 'green'
  },
  textNotReturned: {
    color: 'red'
  },
  textNoData: {
    color: 'black'
  }
});

export default ListHistories;
