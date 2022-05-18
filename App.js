import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Store from "./src/redux/store";

import MainStackNav from "./src/navigations/MainStack";
import AuthStack from "./src/navigations/AuthStackNav";

import pushNotification from "react-native-push-notification";
import RNBootSplash from "react-native-bootsplash";

const Main = () => {
  const { auth } = useSelector(state => state);
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <NativeBaseProvider>
        {auth.token ? <MainStackNav /> : <AuthStack />}
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

pushNotification.createChannel({
  channelId: "payment",
  channelName: "Notification Transaction"
});

pushNotification.createChannel({
  channelId: "updateProfile",
  channelName: "Notification Auth"
});

pushNotification.createChannel({
  channelId: "addingVehicle",
  channelName: "Notification Vehicle"
});

pushNotification.createChannel({
  channelId: "updateVehicle",
  channelName: "Notification Vehicle"
});

const { store, persistor } = Store();

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

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
export default App;