import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Store from './src/redux/store';

import MainStackNav from './src/navigations/MainStack'
import AuthStack from './src/navigations/AuthStackNav'

import messaging from '@react-native-firebase/messaging'
import pushNotification from 'react-native-push-notification'

const Main = () => {
  const { auth } = useSelector(state => state);
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        {auth.token ? <MainStackNav /> : <AuthStack />}
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

pushNotification.createChannel({
  channelId: 'payment',
  channelName: 'Notification Transaction'
})

pushNotification.createChannel({
  channelId: 'updateProfile',
  channelName: 'Notification Auth'
})

const { store, persistor } = Store();

const App = () => {
  const getToken = async () => {
    const token = await messaging().getToken()
    console.log(token);
  }
  useEffect(() => {
    getToken()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  )
}

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <NavigationContainer>
//           <NativeBaseProvider>
//             {/* <AuthStack /> */}
//             <MainStackNav />
//           </NativeBaseProvider>
//         </NavigationContainer>
//       </PersistGate>
//     </Provider >
//   )
// }
export default App