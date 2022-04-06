import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import register from './register';

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistConfig, auth),
  register
});

export default rootReducers;
