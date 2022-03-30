import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = () => {
  const dataNavbar = [
    { title: 'home', icon: 'home', link: '' },
    { title: 'search', icon: 'search', link: '' },
    { title: 'notification', icon: 'sticky-note-o', link: '' },
    { title: 'profile', icon: 'user', link: '' },
  ];
  return (
    <View style={styles.navbar}>
      {dataNavbar.map(item => {
        return (
          <TouchableOpacity key={item.title} style={styles.menuBar}>
            <Text
              style={[
                styles.menuList,
                item.title === 'home' ? styles.active : '',
              ]}>
              <Icon name={item.icon} size={20} />
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  menuBar: {
    width: '25%',
    textAlign: 'center',
    padding: 10,
  },
  menuList: {
    textAlign: 'center',
    padding: 10,
  },
  active: {
    borderRadius: 10,
    color: '#6E85B2',
  },
});
