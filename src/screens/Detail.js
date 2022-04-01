import { View, SafeAreaView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import detailImg from '../assets/detail.png'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navi  gation/native'

const detail = () => {
  const [fav, setFav] = useState(false)
  // const navigation = useNavigation()
  return (
    <View style={styles.wrapper}>
      <View style={styles.barWrapper}>
        <View style={styles.imgWrapper}>
          <Image source={detailImg} style={styles.img} />
        </View>
        <View style={styles.barItem}>
          <View style={styles.barSectionLeft}>
            <TouchableOpacity /*onPress={navigation.goBack}*/>
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
      <View style={styles.desc}>
        <Text style={styles.descVehicle}>Vespa Matic </Text>
        <Text style={styles.descVehicle}>Rp. 120.000/day </Text>
      </View>
      <View style={styles.detailV}>
        <Text style={styles.detailVehicle}>Max for 2 person</Text>
        <Text style={styles.detailVehicle}>No Prepayment</Text>
        <Text style={styles.detailVehicleSucces}>Available</Text>
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
  desc: {
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
  detailVehicleSucces: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default detail