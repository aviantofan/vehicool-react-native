import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Title from '../components/Title';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const data = [
    { id: 1, image: require('../assets/1.png') },
    { id: 2, image: require('../assets/2.png') },
    { id: 3, image: require('../assets/3.png') },
    { id: 4, image: require('../assets/4.png') },
  ];
  const navigation = useNavigation()
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.coverImg} onPress={() => navigation.navigate('DetailVehicle')}>
        <Image source={item.image} style={styles.listImg} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Image
          source={require('../assets/header.png')}
          style={styles.headerImg}
        />
        <View style={styles.content}>
          <Title
            child={'Recommended'} resChild={'View more'} onPress={() => navigation.navigate('Category')}
          />
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={'Hot Deals'} resChild={'View more'} onPress={() => navigation.navigate('Category')} />
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={'Cars'} resChild={'View more'} onPress={() => navigation.navigate('Category')} />
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={'Bike'} resChild={'View more'} onPress={() => navigation.navigate('Category')} />
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title child={'Motorbike'} resChild={'View more'} onPress={() => navigation.navigate('Category')} />
          <FlatList
            data={data}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'rgba(154, 208, 236, 0.1)',
  },
  headerImg: {
    width: '100%',
  },
  coverImg: {
    width: 300,
    marginRight: 20,
  },
  listImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 20,
  },
});

export default Home;
