import React from 'react'

import Login from './src/screens/Login'
import Register from './src/screens/Register'
import ForgotPassword from './src/screens/ForgotPassword'

import Search from './src/screens/Search'
import Profile from './src/screens/Profile'

import UpdateProfile from './src/screens/UpdateProfile'
import Favorite from './src/screens/Favorite'
import ChatRoom from './src/screens/ChatRoom'
import Detail from './src/screens/Detail'
import Payment from './src/screens/Payment'
import FinishedPayment from './src/screens/FinishedPayment'

import HomeNav from './src/navigations/HomeNav'
import HistoryNav from './src/navigations/HistoryNav'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NativeBaseProvider } from 'native-base'

import Icon from 'react-native-vector-icons/FontAwesome'

// const AuthStack = createNativeStackNavigator()
const MainStack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()

// const AuthStackNav = () => {
//   <AuthStack.Navigator screenOptions={{ headerShown: false }}>
//     <AuthStack.Screen name='Login' component={Login} />
//     <AuthStack.Screen name='Register' component={Register} />
//     <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
//   </AuthStack.Navigator>
// }

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
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {/* <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name='Login' component={Login} />
        <AuthStack.Screen name='Register' component={Register} />
        <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
      </AuthStack.Navigator> */}
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
          <MainStack.Screen name='BottomTab' component={BottomNav} />
          <MainStack.Screen name='UpdateProfile' component={UpdateProfile} />
          <MainStack.Screen name='Favorite' component={Favorite} />
          <MainStack.Screen name='ChatRoom' component={ChatRoom} />
          <MainStack.Screen name='DetailVehicle' component={Detail} />
          <MainStack.Screen name='Payment' component={Payment} />
          <MainStack.Screen name='FinishedPayment' component={FinishedPayment} />
        </MainStack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App