import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './reducers';

const persistConfig = {
  key: 'contact',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);
function getPersistor() {
  const store = configureStore({
    reducer: {
      persistedReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  let persistor = persistStore(store);
  return { store, persistor };
}

export default getPersistor();
