import { configureStore } from '@reduxjs/toolkit';
import sideloadsReducer from '../features/sideloads/sideloads';

const store = configureStore({
  reducer: {
    sideloads: sideloadsReducer,
  },
});

export default store;
