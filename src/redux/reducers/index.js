import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import register from './register';
import counter from './counter';
import category from './category';
import popular from './popular';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistRegister = {
  key: 'register',
  storage: AsyncStorage,
};

const persistCounter = {
  key: 'counter',
  storage: AsyncStorage,
}

const persistCategory = {
  key: 'category',
  storage: AsyncStorage,
}

const persistPopular = {
  key: 'popular',
  storage: AsyncStorage,
}

const rootReducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  register: persistReducer(persistRegister, register),
  counter: persistReducer(persistCounter, counter),
  category: persistReducer(persistCategory, category),
  popular: persistReducer(persistPopular, popular),
});

export default rootReducers;
