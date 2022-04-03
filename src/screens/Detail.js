import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import detailImg from '../assets/detail.png'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/Button'
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment';

const Detail = () => {
  const [fav, setFav] = useState(false)
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isStart, setIsStart] = useState(false);
  const [endDate, setEndDate] = useState();
  const navigation = useNavigation()

  const increment = () => {
    if (count < 0) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.barWrapper}>
        <View style={styles.imgWrapper}>
          <Image source={detailImg} style={styles.img} />
        </View>
        <View style={styles.barItem}>
          <View style={styles.barSectionLeft}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name='chevron-left' size={30} color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.barSectionRight}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#3E2C41', '#5C527F']} style={styles.barRating}>
              <Text style={styles.barRatingText}>4.5<Icon name='star' /></Text>
            </LinearGradient>
            <TouchableOpacity onPress={() => setFav(!fav)}>
              {fav ? <MaterialIcon name='favorite' size={30} color='#ed716b' /> : <MaterialIcon name='favorite-border' size={30} color='white' />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.descWrapper}>
        <View style={styles.desc}>
          <Text style={styles.descVehicle}>Vespa Matic </Text>
          <Text style={styles.descVehicle}>Rp. 120.000/day </Text>
        </View>
        <View style={styles.chatIcon}>
          <Ionicons name='chatbubble-outline' size={40} color='#5C527F' />
        </View>
      </View>
      <View style={styles.detailV}>
        <Text style={styles.detailVehicle}>Max for 2 person</Text>
        <Text style={styles.detailVehicle}>No Prepayment</Text>
        <Text style={styles.detailVehicleSuccess}>Available</Text>
      </View>
      <View></View>
      <View style={styles.locWrapper}>
        <Icon style={styles.loc} name='map-marker' size={30} color='#3E2C41' />
        <Text style={styles.locText}>Jalan Maliboboro, No. 21, Yogyakarta</Text>
      </View>
      <View style={styles.direction}>
        <MaterialIcon style={styles.direct} name='directions-walk' size={30} color='#3E2C41' />
        <Text style={styles.directText}>3.2 miles from your location</Text>
      </View>
      <View style={styles.qtyWrapper}>
        <Text style={styles.selectQty}>Select Bikes</Text>
        <View style={styles.counters}>
          <TouchableOpacity style={styles.counter} onPress={increment}>
            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>
              +
            </Text>
          </TouchableOpacity>
          <Text style={{ color: 'black', marginLeft: 20, marginRight: 20, alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}>
            {count}
          </Text>
          <TouchableOpacity style={styles.counter} onPress={decrement}>
            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>
              -
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 19, marginLeft: 19, marginRight: 19, justifyContent: 'space-between', flexDirection: 'row' }}>
        <TouchableOpacity style={styles.startDate}>
          <TouchableOpacity
            title={String(date)}
            onPress={() => setOpen(true)}>
            <Text style={{ color: 'black' }}>
              {isStart ? moment(date).format('MMM DD YYYY') : 'Select date'}
            </Text>
          </TouchableOpacity>
          <DatePicker
            style={styles.datePicker}
            fadeToColor="white"
            theme="dark"
            textColor="white"
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={dateItem => {
              setOpen(false);
              setDate(dateItem);
              setIsStart(true);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.endDate}>
          <Picker
            style={{ color: 'black' }}
            selectedValue={endDate}
            onValueChange={(itemValue, itemIndex) => setEndDate(itemValue)}>
            {[...Array(7)].map((data, index) => (
              <Picker.Item
                style={{ color: 'white' }}
                label={String(index + 1) + ' Day'}
                value={index + 1}
                key={index}
              />
            ))}
          </Picker>
        </TouchableOpacity>
      </View>
      <View style={styles.btn}>
        <Button onPress={() => navigation.navigate('Payment')}>Reservation</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: '100%'
  },
  imgWrapper: {
    height: 250,
    justifyContent: 'center'
  },
  img: {
    width: '100%',
  },
  barWrapper: {
    position: 'relative'
  },
  barItem: {
    flexDirection: 'row',
    paddingHorizontal: 19,
    paddingVertical: 12,
    position: 'absolute'
  },
  barSectionLeft: {
    flex: 1
  },
  barSectionRight: {
    flexDirection: 'row'
  },
  barRating: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 40,
    marginRight: 11
  },
  barRatingText: {
    color: 'white'
  },
  descWrapper: {
    flexDirection: 'row'
  },
  desc: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 19
  },
  chatIcon: {
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 19,
  },
  descVehicle: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
  detailV: {
    marginTop: 20,
    paddingHorizontal: 19,
  },
  detailVehicle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailVehicleSuccess: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locWrapper: {
    marginTop: 20,
    flexDirection: 'row'
  },
  loc: {
    backgroundColor: '#6E85B2',
    width: 45,
    height: 45,
    borderRadius: 10,
    marginTop: 19,
    marginLeft: 19,
    paddingVertical: 8,
    textAlign: 'center',
    alignItems: 'center'
  },
  locText: {
    marginTop: 19,
    marginLeft: 19,
    paddingVertical: 8,
    color: 'black'
  },
  direction: {
    marginTop: 10,
    flexDirection: 'row'
  },
  direct: {
    backgroundColor: '#6E85B2',
    width: 45,
    height: 45,
    borderRadius: 10,
    marginTop: 19,
    marginLeft: 19,
    paddingVertical: 8,
    textAlign: 'center',
    alignItems: 'center'
  },
  directText: {
    marginTop: 19,
    marginLeft: 19,
    paddingVertical: 8,
    color: 'black'
  },
  qtyWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 19,
    marginTop: 20,
  },
  selectQty: {
    flex: 1,
    marginTop: 19,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },
  counter: {
    backgroundColor: '#6E85B2',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  counters: {
    flexDirection: 'row',
    marginTop: 19,
    marginRight: 19
  },
  btn: {
    marginHorizontal: 19,
    fontSize: 50,
    fontWeight: 'bold'
  },
  startDate: {
    borderRadius: 10,
    backgroundColor: 'rgba(57, 57, 57, 0.15)',
    padding: 15,
    width: '60%',
  },
  endDate: {
    width: '35%',
    borderRadius: 10,
    backgroundColor: 'rgba(57, 57, 57, 0.15)',
  },
})

export default Detail