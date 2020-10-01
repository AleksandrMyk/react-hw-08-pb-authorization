import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducer from './Reducer';
import AuthReducer from './auth/AuthReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: Reducer,
    auth: persistReducer(authPersistConfig, AuthReducer),
  },
});

export const persistor = persistStore(store);
