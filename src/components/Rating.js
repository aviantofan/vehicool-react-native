import { StyleSheet } from 'react-native';
import React from 'react';
import { Text } from 'native-base';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Rating = ({ rate, right = -18, top = -10, bottom }) => {
  const styles = StyleSheet.create({
    rate: {
      flexDirection: 'row',
      width: 65,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 7,
      borderRadius: 20,
      position: 'absolute',
      right,
      top,
      bottom,
    },
    iconRate: {
      marginLeft: 8,
    },
  });

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#3E2C41', '#5C527F', '#6E85B2']}
      style={styles.rate}>
      <Text bold color="white" fontSize={'md'}>
        {rate}
      </Text>
      <FaIcon name="star" color="white" size={20} style={styles.iconRate} />
    </LinearGradient>
  );
};

export default Rating;
