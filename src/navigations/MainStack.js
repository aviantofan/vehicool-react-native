import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomNav from './BottomNav';
import UpdateProfile from '../screens/UpdateProfile';
import Favorite from '../screens/Favorite';
import ChatRoom from '../screens/ChatRoom';
import Detail from '../screens/Detail';
import Payment from '../screens/Payment';
import PaymentStepTwo from '../screens/PaymentStepTwo';
import PaymentStepThree from '../screens/PaymentStepThree';
import FinishedPayment from '../screens/FinishedPayment';
import AddVehicle from '../screens/AddVehicle';

const MainStack = createNativeStackNavigator();

const MainStackNav = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name='BottomTab' component={BottomNav} />
      <MainStack.Screen name='UpdateProfile' component={UpdateProfile} />
      <MainStack.Screen name='Favorite' component={Favorite} />
      <MainStack.Screen name='ChatRoom' component={ChatRoom} />
      <MainStack.Screen name='DetailVehicle' component={Detail} />
      <MainStack.Screen name='Payment' component={Payment} />
      <MainStack.Screen name="PaymentStepTwo" component={PaymentStepTwo} />
      <MainStack.Screen name="PaymentStepThree" component={PaymentStepThree} />
      <MainStack.Screen name='FinishedPayment' component={FinishedPayment} />
      <MainStack.Screen name='AddVehicle' component={AddVehicle} />
    </MainStack.Navigator>
  );
};

export default MainStackNav;