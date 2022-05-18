import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import register from './register';
import forgot from './forgot';
import change from './change';
import counter from './counter';
import category from './category';
import popular from './popular';
import detail from './detail.js';
import transaction from './transaction';
import listVehicle from './listVehicle';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistRegister = {
  key: 'register',
  storage: AsyncStorage,
};

const persistForgot = {
  key: 'forgot',
  storage: AsyncStorage,
};

const persistChange = {
  key: 'change',
  storage: AsyncStorage,
};

const persistCounter = {
  key: 'counter',
  storage: AsyncStorage,
};

const persistCategory = {
  key: 'category',
  storage: AsyncStorage,
};

const persistPopular = {
  key: 'popular',
  storage: AsyncStorage,
};

const persistDetail = {
  key: 'detail',
  storage: AsyncStorage,
};

const persistTransaction = {
  key: 'transaction',
  storage: AsyncStorage,
};

const persistListVehicle = {
  key: 'listVehicle',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  register: persistReducer(persistRegister, register),
  forgot: persistReducer(persistForgot, forgot),
  change: persistReducer(persistChange, change),
  counter: persistReducer(persistCounter, counter),
  category: persistReducer(persistCategory, category),
  popular: persistReducer(persistPopular, popular),
  detail: persistReducer(persistDetail, detail),
  transaction: persistReducer(persistTransaction, transaction),
  listVehicle: persistReducer(persistListVehicle, listVehicle)
});

export default rootReducers;
