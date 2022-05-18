import { View, Text } from 'react-native'
import React from 'react'
import History from '../screens/History'
import ChatList from '../screens/ChatList'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useSelector } from 'react-redux'

const HistoryTab = createMaterialTopTabNavigator()

const HistoryNav = () => {
  const { auth } = useSelector(state => state)
  return (
    <HistoryTab.Navigator >
      <HistoryTab.Screen name='Chat' component={ChatList} />
      {auth.userData?.role === 'user' && <HistoryTab.Screen name='History Order' component={History} />}
    </HistoryTab.Navigator>
  )
}

export default HistoryNav