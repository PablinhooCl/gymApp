import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/features/auth/authSlice';
import api from './components/features/auth/apiSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;
