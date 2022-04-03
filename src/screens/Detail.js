import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import detailImg from '../assets/detail.png'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/Button'

const Detail = () => {
  const [fav, setFav] = useState(false)
  const navigation = useNavigation()
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
        <Text style={styles.selectQty}>Select Quantity Vehicle</Text>
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
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 19,
    marginTop: 20,
  },
  selectQty: {
    marginTop: 19,
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },
  btn: {
    marginVertical: 10,
    marginHorizontal: 19,
    fontSize: 50,
    fontWeight: 'bold'
  }
})

export default Detail