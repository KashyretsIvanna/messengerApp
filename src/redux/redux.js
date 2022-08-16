import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducers';

const store = configureStore({
  reducer: {
    contactReducer,
  },
});

export default store
