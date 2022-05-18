import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import ChangePassword from '../screens/ChangePassword';

const AuthStack = createNativeStackNavigator();

const AuthStackNav = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name='Login' component={Login} />
      <AuthStack.Screen name='Register' component={Register} />
      <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
      <AuthStack.Screen name='ChangePassword' component={ChangePassword} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNav;