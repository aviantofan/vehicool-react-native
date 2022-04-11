import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Text, Input } from 'native-base';
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome'
import List from '../components/List';

const Search = ({ navigation }) => {
  const listVehicles = [
    {
      name: 'Vespa Matic',
      seet: 2,
      stock: 14,
      price: 50000,
      image: require('../assets/vespa.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      seet: 2,
      stock: 14,
      price: 50000,
      image: require('../assets/honda.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      seet: 2,
      stock: 2,
      price: 50000,
      image: require('../assets/honda.png'),
      rating: 4,
    },
    {
      name: 'KLX',
      seet: 2,
      stock: 1,
      price: 50000,
      image: require('../assets/klx.png'),
      rating: 4,
    },
    {
      name: 'Vespa',
      seet: 2,
      stock: 14,
      price: 50000,
      image: require('../assets/vespa.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      seet: 2,
      stock: 14,
      price: 50000,
      image: require('../assets/classic.png'),
      rating: 4,
    },
    {
      name: 'KLX',
      seet: 2,
      stock: 14,
      price: 50000,
      image: require('../assets/klx.png'),
      rating: 4,
    },
    {
      name: 'Honda',
      seet: 2,
      stock: 14,
      price: 50000,
      image: require('../assets/honda.png'),
      rating: 4,
    },
    {
      name: 'Vespa',
      seet: 2,
      stock: 14,
      price: 50000,
      image: require('../assets/vespa.png'),
      rating: 4,
    },
  ];

  const [search, setSearch] = useState('');

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.search}>
        <Input
          variant="unstyled"
          placeholder="Search.."
          placeholderTextColor="black"
          value={search}
          onChange={setSearch}
          InputLeftElement={<Icons name='search' color='black' size={16} style={{ marginLeft: 17 }} />}
          InputRightElement={search !== '' ? <TouchableOpacity onPress={() => setSearch('')}><Icons name='remove' color='black' size={11} style={{ marginRight: 19 }} /></TouchableOpacity> : <></>}
        />
        <Icon name="caretdown" size={15} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.filter}
          onPress={() => navigation.navigate('Filter')}>
          <Icon name="filter" color='black' size={30} />
          <Text>Filter Search</Text>
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {listVehicles.map((data, index) => (
            <TouchableOpacity onPress={() => navigation.navigate('DetailVehicle')}>
              <List
                key={id}
                image={data.image}
                name={data.name}
                seet={data.seet}
                stock={data.stock}
                price={data.price}
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
    marginBottom: 120,
  },
  container: {
    padding: 20,
    marginBottom: 70,
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

export default Search