import React from 'react';
import HomeNav from './HomeNav';
import HistoryNav from './HistoryNav';
import Search from '../screens/Search';
import Profile from '../screens/Profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: '#5C527F' }}>

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <Icon name='home' color={color} size={size} />
      }} name='Home' component={HomeNav} />

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <Icon name='search' color={color} size={size} />
      }} name='Search' component={Search} />

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <Icon name='th-list' color={color} size={size} />
      }} name='HistoryTab' component={HistoryNav} />

      <BottomTab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => <Icon name='user' color={color} size={size} />
      }} name='Profile' component={Profile} />

    </BottomTab.Navigator>
  );
};

export default BottomNav;