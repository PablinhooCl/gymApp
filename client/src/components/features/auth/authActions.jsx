import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiCall from '../../funcione/apiCall';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (formData, { rejectWithValue }) => {
    console.log('registerUser', formData);
    await ApiCall('post', 'new-user', formData, rejectWithValue);
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (formData, { rejectWithValue }) => {
    console.log('login', formData);
    const response = await ApiCall('post', 'login', formData, rejectWithValue);
    console.log(response.data);
    localStorage.setItem('userToken', response.data.userToken);
    return response.data;
  },
);

export const getUserInfo = createAsyncThunk(
  'auth/userInfo',
  async (_, { rejectWithValue }) => {
    const response = await ApiCall('get', 'user/info', null, rejectWithValue);
    return response.data.user;
  },
);
